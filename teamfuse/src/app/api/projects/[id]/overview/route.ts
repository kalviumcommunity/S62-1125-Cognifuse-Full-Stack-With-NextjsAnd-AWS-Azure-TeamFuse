import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import {
  getProjectFromCache,
  setProjectInCache,
} from "@/lib/cache/projectCache";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const projectId = req.url.split("/").at(-2);

    if (!projectId) {
      return sendError("Missing project ID", "BAD_REQUEST", 400);
    }

    const membership = await prisma.projectMember.findFirst({
      where: {
        userId: user.id,
        projectId,
        status: "ACCEPTED",
      },
    });

    if (!membership) {
      return sendError("Not authorized for this project", "FORBIDDEN", 403);
    }

    const cached = await getProjectFromCache(projectId);

    if (cached) {
      return sendSuccess(cached, "Overview cached");
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        members: {
          include: {
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
        tasks: true,
        chatMessages: true,
        githubData: { orderBy: { weekStart: "desc" }, take: 1 },
        insights: { orderBy: { generatedAt: "desc" }, take: 1 },
      },
    });

    if (!project) {
      return sendError("Project not found", "NOT_FOUND", 404);
    }

    const taskSummary = {
      total: project.tasks.length,
      todo: project.tasks.filter((t) => t.status === "PENDING").length,
      inProgress: project.tasks.filter((t) => t.status === "IN_PROGRESS")
        .length,
      completed: project.tasks.filter((t) => t.status === "COMPLETED").length,
    };

    const githubSummary = project.githubData[0] ?? {
      commitCount: 0,
      prCount: 0,
      linesAdded: 0,
      linesDeleted: 0,
    };

    const latestInsight = project.insights[0] ?? null;

    await setProjectInCache(projectId, {
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        githubRepo: project.githubRepo,
        updatedAt: project.lastActive ?? project.createdAt,
        createdById: project.createdById,
      },

      members: project.members.map((m) => ({
        memberId: m.id,
        userId: m.user.id,
        name: m.user.name,
        email: m.user.email,
        avatarUrl: m.user.avatarUrl,
        role: m.role,
        status: m.status,
      })),

      stats: {
        tasks: taskSummary,
        github: githubSummary,
        messages: project.chatMessages.length,
      },

      latestInsight,
    });

    return sendSuccess(
      {
        project: {
          id: project.id,
          name: project.name,
          description: project.description,
          githubRepo: project.githubRepo,
          updatedAt: project.lastActive ?? project.createdAt,
          createdById: project.createdById,
        },

        members: project.members.map((m) => ({
          memberId: m.id,
          userId: m.user.id,
          name: m.user.name,
          email: m.user.email,
          avatarUrl: m.user.avatarUrl,
          role: m.role,
          status: m.status,
        })),

        stats: {
          tasks: taskSummary,
          github: githubSummary,
          messages: project.chatMessages.length,
        },

        latestInsight,
      },
      "Overview data loaded"
    );
  } catch (err) {
    console.error("Error fetching overview:", err);
    return sendError(
      "Server error fetching overview",
      "INTERNAL_ERROR",
      500,
      err
    );
  }
});
