import { prisma } from "@/lib/prisma";
import {
  getMembersFromCache,
  setMembersInCache,
} from "@/lib/cache/memberCache";
import { sendSuccess } from "@/lib/responseHandler";
import { handleRouteError } from "@/lib/errors/handleRouteError";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const { id: projectId } = await params; // unwrap await

  try {
    const { id: projectId } = params;

    const cached = await getMembersFromCache(projectId);
    if (cached) {
      return sendSuccess(cached, "Hit members cache");
    }

    const members = await prisma.projectMember.findMany({
      where: {
        projectId,
        status: "ACCEPTED",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });


    // Remove duplicates by user ID
    const uniqueMembers = Array.from(
      new Map(members.map((m) => [m.user.id, m.user])).values()
    );
    await setMembersInCache(projectId, members);

    return sendSuccess(members, "Successfully fetched all the members");
  } catch (e) {
    console.error("MEMBER FETCH ERROR:", e);
    return handleRouteError(e);

  }
}
