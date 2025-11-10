import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  verifyRefresh,
  signAccessToken,
  signRefreshToken,
  hashToken,
  JwtUser,
} from "@/lib/auth-tokens";
import { cookies } from "next/headers";
import { sendError } from "@/lib/responseHandler";

export async function POST() {
  const c = await cookies();
  const rt = c.get("refresh_token")?.value;
  if (!rt)
    return sendError("Missing Refresh Token", "REFRESH_TOKEN_MISSING", 401);

  try {
    const { payload } = await verifyRefresh(rt);
    const userId = payload.sub!;
    const jti = String(payload.jti);

    const stored = await prisma.refreshToken.findFirst({
      where: { hashedToken: await hashToken(rt), userId },
    });
    if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
      return sendError("Invalid Refresh Token", "REFRESH_TOKEN_INVALID", 401);
    }

    // rotate: revoke old, issue new
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return sendError("User Not Found", "USER_NOT_FOUND", 401);

    const jwtUser: JwtUser = { sub: user.id, email: user.email };
    const access = await signAccessToken(jwtUser);
    const newJti = cryptoRandom();
    const newRefresh = await signRefreshToken(jwtUser, newJti);

    await prisma.$transaction([
      prisma.refreshToken.update({
        where: { id: stored.id },
        data: {
          revokedAt: new Date(),
          replacedByToken: newJti,
          lastUsedAt: new Date(), // ✅ update last used timestamp
        },
      }),
      prisma.refreshToken.create({
        data: {
          userId,
          hashedToken: await hashToken(newRefresh),
          expiresAt: stored.expiresAt, // if persistent login OFF
          deviceName: stored.deviceName, // ✅ preserve metadata for new rotated token
          userAgent: stored.userAgent,
          ipAddress: stored.ipAddress,
          location: stored.location,
        },
      }),
    ]);

    const res = NextResponse.json({
      accessToken: access,
      refreshToken: newRefresh,
    });

    c.set("access_token", access, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });
    c.set("refresh_token", newRefresh, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch {
    return NextResponse.json({ error: "invalid refresh" }, { status: 401 });
  }
}

function cryptoRandom() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
const crypto =
  (globalThis.crypto as Crypto) ?? (await import("crypto")).webcrypto;
