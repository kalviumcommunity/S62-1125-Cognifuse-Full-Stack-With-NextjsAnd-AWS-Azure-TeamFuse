import { handleRouteError } from "@/lib/errors/handleRouteError";
import { prisma } from "@/lib/prisma";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { withAuth } from "@/lib/withAuth";
import { invalidateUserProjectCache } from "@/lib/cache/userProjectCache";
import { invalidateProjectCache } from "@/lib/cache/projectCache";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const projectId = params.id;
  return withAuth(async (_req, user) => {
    try {
      if (!projectId || typeof projectId !== "string") {
        return sendError("Project ID is required", "BAD_REQUEST", 400);
      }

      // Atomically update only if the requester is the project owner
      const updateResult = await prisma.project.updateMany({
        where: {
          id: projectId,
          createdById: user.id,
        },
        data: {
          status: "COMPLETED",
          lastActive: new Date(), // optional
          // completedAt: new Date(), // if you have a completedAt field
        },
      });

      if (updateResult.count === 0) {
        // Either project doesn't exist or user isn't owner
        return sendError(
          "You are not allowed to update this project",
          "FORBIDDEN",
          403
        );
      }
      if (updateResult.count === 0) {
        // Either project doesn't exist or user isn't owner
        return sendError(
          "You are not allowed to update this project",
          "FORBIDDEN",
          403
        );
      }
      // Fetch the project with members so we can return it and invalidate caches
      const project = await prisma.project.findUnique({
        where: { id: projectId },
        include: {
          members: {
            select: { userId: true },
          },
        },
      });

      if (!project) {
        // Extremely unlikely because updateMany succeeded, but safe-guard
        return sendError("Project not found after update", "NOT_FOUND", 404);
      }
      if (!project) {
        // Extremely unlikely because updateMany succeeded, but safe-guard
        return sendError("Project not found after update", "NOT_FOUND", 404);
      }

      // Invalidate caches for ALL users related to the project (members + owner)
      const userIdsToInvalidate = new Set<string>();
      // add owner
      userIdsToInvalidate.add(project.createdById);
      // add member user ids
      project.members.forEach((m) => {
        if (m.userId) userIdsToInvalidate.add(m.userId);
      });

      // run invalidations in parallel but don't crash route if one fails
      await Promise.all(
        Array.from(userIdsToInvalidate).map(async (uid) => {
          try {
            await invalidateUserProjectCache(uid);
          } catch (err) {
            console.error(
              `Failed to invalidate userProjectCache for ${uid}`,
              err
            );
            // swallow error so invalidation failure doesn't break the API response
          }
        })
      );
      // run invalidations in parallel but don't crash route if one fails
      await Promise.all(
        Array.from(userIdsToInvalidate).map(async (uid) => {
          try {
            await invalidateUserProjectCache(uid);
          } catch (err) {
            console.error(
              `Failed to invalidate userProjectCache for ${uid}`,
              err
            );
            // swallow error so invalidation failure doesn't break the API response
          }
        })
      );

      // invalidate project-specific cache
      try {
        await invalidateProjectCache(projectId);
      } catch (err) {
        console.error("Failed to invalidate project cache", err);
      }
      // invalidate project-specific cache
      try {
        await invalidateProjectCache(projectId);
      } catch (err) {
        console.error("Failed to invalidate project cache", err);
      }

      // Optionally return the freshly fetched project or a small payload
      return sendSuccess(
        { project },
        "Project successfully marked as completed"
      );
    } catch (err) {
      console.log("Project Complete Error:", err);
      return handleRouteError(err);
    }
  })(req, { params });
}
