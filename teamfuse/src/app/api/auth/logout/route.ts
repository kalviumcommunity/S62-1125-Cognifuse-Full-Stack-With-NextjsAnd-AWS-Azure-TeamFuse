import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { hashToken } from "@/lib/auth-tokens";
import { sendError, sendSuccess } from "@/lib/responseHandler";

export async function POST() {
  try {
    const c = await cookies();
    const refreshToken = c.get("refresh_token")?.value;

    if (refreshToken) {
      const hashed = await hashToken(refreshToken);

      // ✅ Revoke the refresh token in DB
      await prisma.refreshToken.updateMany({
        where: { hashedToken: hashed, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }

    // ✅ Remove cookies
    c.delete("access_token");
    c.delete("refresh_token");

    return sendSuccess({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout route:", error);

    return sendError(
      "Internal Server Error",
      "INTERNAL_SERVER_ERROR",
      500,
      error
    );
  }
}
