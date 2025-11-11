/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const projectId = params.id;

    const sessions = await prisma.presenceSession.findMany({
      where: { projectId },
      include: {
        user: { select: { id: true, name: true, avatarUrl: true } },
      },
      orderBy: { lastActive: "desc" },
    });

    const formatted = sessions.map((s) => ({
      userId: s.userId,
      name: s.user.name,
      avatarUrl: s.user.avatarUrl,
      status: s.status,
      totalActiveMinutes: s.totalActiveMinutes || 0,
      lastActive: s.lastActive,
    }));

    return sendSuccess(formatted, "Presence data fetched successfully");
  } catch (error: any) {
    console.error("Error fetching presence data:", error);
    return sendError(error.message, "FETCH_PRESENCE_ERROR", 500, error);
  }
}
