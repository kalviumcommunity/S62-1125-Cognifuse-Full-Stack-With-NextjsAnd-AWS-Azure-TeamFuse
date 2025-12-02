import { invalidateMemberCache } from "@/lib/cache/memberCache";
import { invalidateProjectCache } from "@/lib/cache/projectCache";
import { respondToInvite } from "@/lib/db/members/respondToInvite";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { withAuth } from "@/lib/withAuth";

export const POST = withAuth(async (req, user, context) => {
  try {
    const params = context?.params;
    const projectId = params?.id;

    if (!projectId) {
      return sendError("Project ID is required", "BAD_REQUEST", 400);
    }

    const { action } = await req.json(); // ACCEPT or DECLINE

    if (!["ACCEPT", "DECLINE"].includes(action)) {
      return sendError("Invalid action", "BAD_REQUEST", 400);
    }

    const updated = await respondToInvite(projectId, user.id, action);

    if (action == "ACCEPT") {
      await invalidateProjectCache(projectId);
      await invalidateMemberCache(projectId);
    }

    return sendSuccess(
      updated,
      `Invite ${action.toLowerCase()}ed successfully`
    );
  } catch (err) {
    console.log(
      "Invite Respond Error: POST api/projects/[id]/invite/respond",
      err
    );
    return handleRouteError(err);
  }
});
