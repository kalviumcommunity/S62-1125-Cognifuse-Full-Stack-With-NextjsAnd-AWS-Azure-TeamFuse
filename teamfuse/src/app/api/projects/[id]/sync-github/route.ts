// app/api/projects/[id]/sync-github/route.ts
import { NextRequest } from "next/server";
import { withAuth } from "@/lib/withAuth";
import { prisma } from "@/lib/prisma";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { githubSyncQueue } from "@/lib/queue/queues";
import { getGitHubToken } from "@/lib/github/getGitHubToken";
import { handleRouteError } from "@/lib/errors/handleRouteError";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // <-- typed shape of params
) {
  // no awaiting params — params is a plain object
  const params = await context.params;
  const projectId = params.id;
  if (!projectId) return sendError("Missing project ID", "BAD_REQUEST", 400);

  return withAuth(async (_req: NextRequest, user) => {
    try {
      // --- 1. CHECK PROJECT EXISTS ---
      const project = await prisma.project.findUnique({
        where: { id: projectId },
        select: { githubRepo: true },
      });

      if (!project) return sendError("Project not found", "NOT_FOUND", 404);
      if (!project.githubRepo)
        return sendError(
          "Project is not linked to any GitHub repo",
          "BAD_REQUEST",
          400
        );

      // --- 2. CHECK USER IS PART OF THE PROJECT ---
      const membership = await prisma.projectMember.findUnique({
        where: {
          userId_projectId: {
            userId: user.id,
            projectId,
          },
        },
      });

      if (!membership) return sendError("Forbidden", "FORBIDDEN", 403);

      // --- 3. GET GITHUB TOKEN ---
      const token = await getGitHubToken(user.id);
      if (!token?.accessToken)
        return sendError("Missing GitHub OAuth token", "UNAUTHORIZED", 401);

      // Store delivery (pending)
      const sync = await prisma.projectSync.create({
        data: {
          userId: user.id,
          projectId,
        },
      });

      // --- 4. QUEUE THE SYNC JOB ---
      const job = await githubSyncQueue.add("sync", {
        syncId: sync.id,
        projectId,
        userId: user.id,
      });

      return sendSuccess(
        { jobId: job.id },
        "Sync started — updates will appear shortly",
        202
      );
    } catch (err) {
      console.error("Sync GitHub Error:", err);
      return handleRouteError(err);
    }
  })(req, { params });
}
