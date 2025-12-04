import { NextRequest } from "next/server";
import { withAuth } from "@/lib/withAuth";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { getProjectById } from "@/lib/services/projectServices";
import { handleRouteError } from "@/lib/errors/handleRouteError";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const projectId = params.id;

  return withAuth(async (_req: NextRequest, user) => {
    try {
      if (!projectId) {
        return sendError("Missing project ID", "BAD_REQUEST", 400);
      }

      const project = getProjectById(projectId, user.id);

      return sendSuccess(project, "Overview data loaded");
    } catch (err) {
      console.error("Error fetching overview:", err);
      return handleRouteError(err);
    }
  })(req, { params });
}
