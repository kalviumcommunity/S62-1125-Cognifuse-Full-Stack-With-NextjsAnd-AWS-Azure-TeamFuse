import {
  signAccessToken,
  signRefreshToken,
  hashToken,
  JwtUser,
} from "@/lib/auth-tokens";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { oauthSchema } from "@/lib/validators/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = oauthSchema.safeParse(body);
    if (!result.success) {
      return sendError("Invalid payload", "INVALID_PAYLOAD", 400);
    }

    const { email, name, avatar, oauthProvider, oauthId } = result.data;

    const cookieStore = await cookies();

    // check if session already active on this device
    const existingRt = cookieStore.get("refresh_token")?.value;

    if (existingRt) {
      const hashed = await hashToken(existingRt);
      const existing = await prisma.refreshToken.findFirst({
        where: { hashedToken: hashed, revokedAt: null },
      });

      if (existing) {
        // already logged in on this device → skip session creation
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    // upsert user
    const user = await prisma.user.upsert({
      where: { oauthId },
      update: { name, avatarUrl: avatar, email },
      create: { email, name, avatarUrl: avatar, oauthProvider, oauthId },
    });

    const jwtUser: JwtUser = { sub: user.id, email: user.email };

    // cleanup expired refresh Tokens
    await prisma.refreshToken.deleteMany({
      where: { userId: user.id, expiresAt: { lt: new Date() } },
    });

    // Enforce a limit of 5 sesions
    const activeSessions = await prisma.refreshToken.findMany({
      where: { userId: user.id, revokedAt: null },
      orderBy: { createdAt: "asc" },
    });
    if (activeSessions.length >= 5) {
      await prisma.refreshToken.update({
        where: { id: activeSessions[0].id },
        data: { revokedAt: new Date() },
      });
    }

    // create tokens
    const access = await signAccessToken(jwtUser);
    const jti = cryptoRandom();
    const refresh = await signRefreshToken(jwtUser, jti);

    // persist hashed refresh token
    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        hashedToken: await hashToken(refresh),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),

        // ✅ add session metadata
        userAgent: req.headers.get("user-agent") ?? "Unknown",
        ipAddress: req.headers.get("x-forwarded-for") ?? "localhost",
        deviceName: body.deviceName || null,
      },
    });

    // Create the response
    const res = NextResponse.json(
      {
        success: true,
        message: "Logged In successfully!",
        data: {
          accessToken: access,
          refreshToken: refresh,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            avatarUrl: user.avatarUrl,
          },
        },
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );

    // Set cookies on the response object
    res.cookies.set("access_token", access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15,
    });

    res.cookies.set("refresh_token", refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return res;
  } catch (error) {
    console.error("Error in OAuth route:", error);
    return sendError(
      "Internal Server Error",
      "INTERNAL_SERVER_ERROR",
      500,
      error
    );
  }
}

function cryptoRandom() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// polyfill for edge/runtime where needed
const crypto: Crypto = globalThis.crypto as Crypto;
