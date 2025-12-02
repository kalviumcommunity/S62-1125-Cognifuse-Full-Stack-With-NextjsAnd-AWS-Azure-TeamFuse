import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    // Extract route segments
    const parts = req.nextUrl.pathname.split("/");
    const projectId = parts[3];

    if (!projectId) {
      return sendError("Missing project ID", "BAD_REQUEST", 400);
    }

    const membership = await prisma.projectMember.findFirst({
      where: {
        userId: user.id,
        projectId,
        status: "ACCEPTED",
      },
    });

    if (!membership) {
      return sendError("Not authorized for this project", "FORBIDDEN", 403);
    }

    const recipientId = req.nextUrl.searchParams.get("recipient");

    let messages;

    if (!recipientId) {
      // public chat
      messages = await prisma.chatMessage.findMany({
        where: { projectId, recipientId: null },
        orderBy: { createdAt: "asc" },
        include: {
          sender: true,
          recipient: true,
        },
      });
    } else {
      // private dm
      messages = await prisma.chatMessage.findMany({
        where: {
          projectId,
          OR: [
            { senderId: user.id, recipientId },
            { senderId: recipientId, recipientId: user.id },
          ],
        },
        orderBy: { createdAt: "asc" },
        include: {
          sender: true,
          recipient: true,
        },
      });
    }

    return sendSuccess(messages, "Chat messages loaded");
  } catch (err) {
    console.error("Error loading chat messages:", err);
    return sendError(
      "Server error loading messages",
      "INTERNAL_ERROR",
      500,
      err
    );
  }
});
