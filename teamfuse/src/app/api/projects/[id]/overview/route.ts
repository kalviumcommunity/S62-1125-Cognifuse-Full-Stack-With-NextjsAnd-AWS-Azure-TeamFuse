/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                role: true,
                avatarUrl: true,
                githubProfile: { select: { commits: true } },
                googleProfile: { select: { editsCount: true } },
                messages: { where: { projectId: id }, select: { id: true } },
                tasksAssigned: { select: { id: true, status: true } },
              },
            },
          },
        },
        tasks: true,
        messages: true,
      },
    });

    if (!project) return sendError("Project not found", "NOT_FOUND", 404);

    const totalCommits = project.members.reduce(
      (s, m) => s + (m.user.githubProfile?.commits || 0),
      0
    );
    const activeTasks = project.tasks.filter((t) => t.status !== "COMPLETED").length;
    const totalMessages = project.messages.length;

    const overview = {
      id: project.id,
      name: project.name,
      description: project.description,
      githubRepo: project.description?.includes("github.com")
        ? project.description
        : "https://github.com/org/repo", // placeholder
      updatedAt: project.messages[0]?.createdAt || project.createdAt,
      stats: {
        totalCommits,
        activeTasks,
        totalMessages,
        lastUpdated: project.messages[0]?.createdAt || project.createdAt,
      },
      members: project.members.map((m) => ({
        name: m.user.name,
        role: m.role,
        commits: m.user.githubProfile?.commits || 0,
        tasks: m.user.tasksAssigned.length,
        messages: m.user.messages.length,
      })),
    };

    return sendSuccess(overview, "Overview data fetched");
  } catch (error: any) {
    console.error("Overview API error:", error);
    return sendError(error.message, "FETCH_OVERVIEW_ERROR", 500, error);
  }
}
