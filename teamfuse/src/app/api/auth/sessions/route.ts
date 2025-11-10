import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/lib/withAuth";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export const GET = withAuth(async (req, user) => {
  try {
    const sessions = await prisma.refreshToken.findMany({
      where: {
        userId: user.id,
        revokedAt: null, // ✅ Only active sessions
      },
      select: {
        id: true,
        createdAt: true,
        lastUsedAt: true,
        deviceName: true,
        userAgent: true,
        ipAddress: true,
        location: true,
        expiresAt: true,
      },
      orderBy: {
        lastUsedAt: "desc", // ✅ Most active session at top
      },
    });

    return sendSuccess(
      { sessions, count: sessions.length },
      "Active sessions fetched successfully"
    );
  } catch (error) {
    console.error("Error fetching user sessions:", error);
    return sendError("Internal Server Error", "INTERNAL_SERVER_ERROR", 500);
  }
});
