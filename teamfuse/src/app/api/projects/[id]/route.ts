import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { AppError } from "@/lib/errors/AppError";
import { handleRouteError } from "@/lib/errors/handleRouteError";

export const GET = withAuth(async (req, user) => {
  try {
    const projectId = req.url.split("/").pop();
    if (!projectId) {
      throw new AppError("Missing project ID", "BAD_REQUEST", 400);
    }

    // Check if user is a member of the project
    const membership = await prisma.projectMember.findFirst({
      where: { projectId, userId: user.id, status: "ACCEPTED" },
    });

    if (!membership) {
      throw new AppError(
        "You are not a member of this project",
        "FORBIDDEN",
        403
      );
    }

    // Fetch full project dashboard data
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
          take: 1,
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

    // ---- Transform data for frontend ---- //
    const taskSummary = {
      total: project.tasks.length,
      todo: project.tasks.filter((t) => t.status === "PENDING").length,
      inProgress: project.tasks.filter((t) => t.status === "IN_PROGRESS")
        .length,
      completed: project.tasks.filter((t) => t.status === "COMPLETED").length,
      assignedToMe: project.tasks.filter((t) => t.assigneeId === user.id)
        .length,
    };

    const githubSummary = project.githubData[0] ?? {
      commitCount: 0,
      prCount: 0,
      linesAdded: 0,
      linesDeleted: 0,
    };

    const latestInsight = project.insights[0] ?? null;

    return NextResponse.json({
      success: true,
      data: {
        project: {
          id: project.id,
          name: project.name,
          description: project.description,
          githubRepo: project.githubRepo,
          createdAt: project.createdAt,
          lastActive: project.lastActive,
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

        taskSummary,

        recentMessages: project.chatMessages.reverse(), // oldest first

        githubSummary,

        latestInsight,
      },
    });
  } catch (err) {
    return handleRouteError(err);
  }
});
