import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    // Extract route segments
    const parts = req.nextUrl.pathname.split("/");
    // /api/projects/{id}/chat/send → id is at index 3
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

    const body = await req.json();
    const { message, recipientId } = body;

    if (!message || message.trim().length === 0) {
      return sendError("Message cannot be empty", "BAD_REQUEST", 400);
    }

    const saved = await prisma.chatMessage.create({
      data: {
        message,
        senderId: user.id,
        projectId,
        recipientId: recipientId ?? null,
      },
      include: {
        sender: true,
        recipient: true,
      },
    });

    return sendSuccess(saved, "Message sent");
  } catch (err) {
    console.error("Error sending chat message:", err);
    return sendError(
      "Server error sending message",
      "INTERNAL_ERROR",
      500,
      err
    );
  }
});
