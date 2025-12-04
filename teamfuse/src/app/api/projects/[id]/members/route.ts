import { sendSuccess } from "@/lib/responseHandler";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { getProjectMembers } from "@/lib/services/memberServices";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  try {
    const { id: projectId } = await params;

    const members = await getProjectMembers(projectId);

    return sendSuccess(members, "Successfully fetched all the members");
  } catch (e) {
    console.error("MEMBER FETCH ERROR:", e);
    return handleRouteError(e);
  }
}