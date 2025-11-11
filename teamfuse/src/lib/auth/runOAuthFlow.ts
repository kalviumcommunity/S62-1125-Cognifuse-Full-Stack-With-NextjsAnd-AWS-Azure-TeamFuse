// lib/auth/runOAuthFlow.ts
import {
  signAccessToken,
  signRefreshToken,
  hashToken,
  JwtUser,
} from "@/lib/auth-tokens";
import { prisma } from "@/lib/prisma";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function runOAuthFlow(
  payload: {
    email: string;
    name: string;
    avatar?: string;
    oauthProvider: "github" | "google";
    oauthId: string;
    deviceName?: string | undefined;
  },
  req: NextRequest | null = null // only for API route, not needed in callback
) {
  const { email, name, avatar, oauthProvider, oauthId, deviceName } = payload;

  const cookieStore = req === null ? await cookies() : req.cookies;

  // ✅ check if refresh token already exists (user already logged in)
  const existingRt = cookieStore.get("refresh_token")?.value;
  if (existingRt) {
    const hashed = await hashToken(existingRt);
    const existing = await prisma.refreshToken.findFirst({
      where: { hashedToken: hashed, revokedAt: null },
    });

    if (existing) {
      return { alreadyLoggedIn: true };
    }
  }

  // ✅ create or update user
  const user = await prisma.user.upsert({
    where: { oauthId },
    update: { name, avatarUrl: avatar, email },
    create: { email, name, avatarUrl: avatar, oauthProvider, oauthId },
  });

  const jwtUser: JwtUser = { sub: user.id, email: user.email };

  // ✅ remove expired refresh tokens
  await prisma.refreshToken.deleteMany({
    where: { userId: user.id, expiresAt: { lt: new Date() } },
  });

  // ✅ enforce session limit (max 5 devices)
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

  // ✅ create tokens
  const access = await signAccessToken(jwtUser);
  const jti = cryptoRandom();
  const refresh = await signRefreshToken(jwtUser, jti);

  // ✅ save refresh token in DB (hashed)
  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      hashedToken: await hashToken(refresh),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),

      userAgent: req?.headers?.get("user-agent") ?? "Unknown",
      ipAddress: (req?.headers.get("x-forwarded-for") ?? "localhost")
        .split(",")[0]
        .trim(),
      deviceName: deviceName ?? null,
    },
  });

  // ✅ set cookies
  cookieStore.set("access_token", access, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 15,
  });

  cookieStore.set("refresh_token", refresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return {
    success: true,
    user,
    access,
    refresh,
  };
}

// helper
function cryptoRandom() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// polyfill for edge/runtime where needed
const crypto: Crypto = globalThis.crypto as Crypto;
