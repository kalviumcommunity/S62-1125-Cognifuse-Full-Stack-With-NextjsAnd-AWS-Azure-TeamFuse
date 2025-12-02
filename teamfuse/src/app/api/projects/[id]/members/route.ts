import { prisma } from "@/lib/prisma";
import {
  getMembersFromCache,
  setMembersInCache,
} from "@/lib/cache/memberCache";
import { sendSuccess } from "@/lib/responseHandler";
import { handleRouteError } from "@/lib/errors/handleRouteError";

export async function GET({ params }: { params: { id: string } }) {
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

    await setMembersInCache(projectId, members);

    return sendSuccess(members, "Successfully fetched all the members");
  } catch (e) {
    console.error("MEMBER FETCH ERROR:", e);
    return handleRouteError(e);
  }
}
