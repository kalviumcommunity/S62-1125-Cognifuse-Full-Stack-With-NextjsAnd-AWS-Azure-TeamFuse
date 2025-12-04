// src/lib/services/projectServices.ts
import { prisma } from "@/lib/prisma";
import { AppError } from "@/lib/errors/AppError";
import {
  getProjectFromCache,
  setProjectInCache,
} from "@/lib/cache/projectCache";
import type { ProjectTask } from "@/lib/types/projectTask";
import {
  getUserProjectFromCache,
  setUserProjectInCache,
} from "@/lib/cache/userProjectCache";
import {
  Insight,
  Project,
  ProjectMember,
  Task,
  GitHubActivity,
} from "@/generated/prisma";

/**
 * Shapes returned by this service
 */
export type TaskSummary = {
  total: number;
  todo: number;
  inProgress: number;
  completed: number;
  assignedToMe: number;
};

export type GitHubSummary = {
  commitCount: number;
  prCount: number;
  linesAdded: number;
  linesDeleted: number;
};

export type ProjectDashboardResponse = {
  project:
    | (Project & {
        members: Array<
          Pick<ProjectMember, "id" | "role" | "status"> & {
            user: {
              id: string;
              name: string | null;
              email: string | null;
              avatarUrl: string | null;
            };
          }
        >;
        tasks: Array<
          Pick<Task, "id" | "title" | "status" | "assigneeId" | "priority">
        >;
        chatMessages: Array<{
          id: string;
          body: string;
          createdAt: Date;
          sender: {
            id: string;
            name: string | null;
            avatarUrl: string | null;
          } | null;
        }>;
        githubData: GitHubActivity[];
        insights: Insight[];
      })
    | null;
  taskSummary: TaskSummary;
  githubSummary: GitHubSummary;
  latestInsight: Insight | null;
};

/**
 * Fetch project details for a given projectId and userId.
 * Throws AppError(403) if the user is not a member.
 */
export async function getProjectById(projectId: string, userId: string) {
  // 1) ensure user is a member with ACCEPTED status
  const membership = await prisma.projectMember.findFirst({
    where: { projectId, userId, status: "ACCEPTED" },
  });

  if (!membership) {
    throw new AppError(
      "You are not a member of this project",
      "FORBIDDEN",
      403
    );
  }

  // 2) try cache
  const cached = await getProjectFromCache(projectId);
  if (cached) return cached;

  // 3) fetch project with filtered members & related data
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      members: {
        where: { status: "ACCEPTED" },
        select: {
          role: true,
          status: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              avatarUrl: true,
            },
          },
        },
      },
      tasks: {
        select: {
          id: true,
          title: true,
          status: true,
          assigneeId: true,
          priority: true,
        },
      },
      chatMessages: {
        orderBy: { createdAt: "desc" },
        take: 10,
        include: {
          sender: {
            select: { id: true, name: true, avatarUrl: true },
          },
        },
      },
      githubData: {
        orderBy: { weekStart: "desc" },
      },
      insights: {
        orderBy: { generatedAt: "desc" },
        take: 1,
      },
    },
  });

  if (!project) {
    throw new AppError("Project not found", "NOT_FOUND", 404);
  }

  // 4) build task summary
  const tasks = project.tasks ?? [];
  const taskSummary: TaskSummary = {
    total: tasks.length,
    todo: tasks.filter((t: ProjectTask) => t.status === "TODO").length,
    inProgress: tasks.filter((t: ProjectTask) => t.status === "IN_PROGRESS")
      .length,
    completed: tasks.filter((t: ProjectTask) => t.status === "DONE").length,
    assignedToMe: tasks.filter((t) => t.assigneeId === userId).length,
  };

  // 5) build github summary (safe reductions)
  const gh = project.githubData ?? [];
  const githubSummary: GitHubSummary = gh.reduce(
    (acc, item) => {
      acc.commitCount += item.commitCount ?? 0;
      acc.prCount += item.prCount ?? 0;
      acc.linesAdded += item.linesAdded ?? 0;
      acc.linesDeleted += item.linesDeleted ?? 0;
      return acc;
    },
    {
      commitCount: 0,
      prCount: 0,
      linesAdded: 0,
      linesDeleted: 0,
    } as GitHubSummary
  );

  // 6) latest insight
  const latestInsight = (project.insights && project.insights[0]) ?? null;

  // 7) save to cache (best-effort)
  try {
    await setProjectInCache(projectId, {
      project,
      taskSummary,
      githubSummary,
      latestInsight,
    });
  } catch (cacheErr) {
    // don't fail the request just because cache write failed
    console.warn("Failed to set project in cache:", cacheErr);
  }

  return { project, taskSummary, githubSummary, latestInsight };
}

/**
 * Returns accepted and pending projects for a user.
 * Also populates a small `role`, commit count and message count for listing UI.
 */
export async function getAllProjectsForUser(userId: string) {
  try {
    const cached = await getUserProjectFromCache(userId);
    if (cached) {
      return cached;
    }
    const acceptedRaw = await prisma.project.findMany({
      where: {
        members: {
          some: { userId, status: "ACCEPTED" },
        },
      },
      include: {
        members: {
          where: { userId },
          select: {
            role: true,
            status: true,
          },
        },
        githubData: {
          orderBy: { weekStart: "desc" },
        },
        _count: {
          select: {
            chatMessages: true,
          },
        },
      },
    });

    const pendingRaw = await prisma.project.findMany({
      where: {
        members: {
          some: { userId, status: "PENDING" },
        },
      },
      include: {
        githubData: {
          orderBy: { weekStart: "desc" },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        members: {
          where: { userId },
          select: {
            role: true,
            status: true,
          },
        },
        _count: {
          select: {
            chatMessages: true,
          },
        },
      },
    });

    const getCommitCount = (
      githubData: (Pick<GitHubActivity, "commitCount"> & {
        commitCount?: number;
      })[] = []
    ) => githubData.reduce((sum, g) => sum + (g.commitCount ?? 0), 0);

    const accepted = acceptedRaw.map((p) => ({
      ...p,
      id: p.id,
      name: p.name,
      description: p.description,
      githubRepo: p.githubRepo,
      createdAt: p.createdAt,
      role: p.members?.[0]?.role ?? null,
      commits: getCommitCount(p.githubData),
      totalMessages: p._count?.chatMessages ?? 0,
      // include any additional fields you need for listing
    }));

    const pending = pendingRaw.map((p) => ({
      ...p,
      id: p.id,
      name: p.name,
      description: p.description,
      githubRepo: p.githubRepo,
      createdAt: p.createdAt,
      role: p.members?.[0]?.role ?? null,
      commits: getCommitCount(p.githubData),
      totalMessages: p._count?.chatMessages ?? 0,
    }));

    // cache best-effort
    try {
      await setUserProjectInCache(userId, { accepted, pending });
    } catch (cacheErr) {
      console.warn("Failed to set user projects in cache:", cacheErr);
    }

    return { accepted, pending };
  } catch (err) {
    console.error("Error In getAllProjectsForUser", err);
    throw err;
  }
}
