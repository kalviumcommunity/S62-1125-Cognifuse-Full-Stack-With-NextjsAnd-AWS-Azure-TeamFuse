import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { cookies } from "next/headers";
import {
  signAccessToken,
  signRefreshToken,
  hashToken,
  JwtUser,
} from "@/lib/auth-tokens";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!user.email || !account?.providerAccountId) {
          return false;
        }

        const cookieStore = await cookies();

        // Check if session already exists
        const existingRt = cookieStore.get("refresh_token")?.value;
        if (existingRt) {
          const hashed = await hashToken(existingRt);
          const existing = await prisma.refreshToken.findFirst({
            where: { hashedToken: hashed, revokedAt: null },
          });
          if (existing) {
            return true; // Already logged in
          }
        }

        // Upsert user
        const dbUser = await prisma.user.upsert({
          where: { oauthId: account.providerAccountId },
          update: {
            name: user.name!,
            avatarUrl: user.image,
            email: user.email,
          },
          create: {
            email: user.email!,
            name: user.name!,
            avatarUrl: user.image,
            oauthProvider: "github",
            oauthId: account.providerAccountId,
          },
        });

        const jwtUser: JwtUser = { sub: dbUser.id, email: dbUser.email };

        // Cleanup expired tokens
        await prisma.refreshToken.deleteMany({
          where: { userId: dbUser.id, expiresAt: { lt: new Date() } },
        });

        // Enforce session limit
        const activeSessions = await prisma.refreshToken.findMany({
          where: { userId: dbUser.id, revokedAt: null },
          orderBy: { createdAt: "asc" },
        });
        if (activeSessions.length >= 5) {
          await prisma.refreshToken.update({
            where: { id: activeSessions[0].id },
            data: { revokedAt: new Date() },
          });
        }

        // Create tokens
        const access = await signAccessToken(jwtUser);
        const jti = cryptoRandom();
        const refresh = await signRefreshToken(jwtUser, jti);

        // Persist refresh token
        await prisma.refreshToken.create({
          data: {
            userId: dbUser.id,
            hashedToken: await hashToken(refresh),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            userAgent: "Unknown", // Not available in this context
            ipAddress: "Unknown",
            deviceName: null,
          },
        });

        // Set cookies directly
        cookieStore.set("access_token", access, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 15,
        });

        cookieStore.set("refresh_token", refresh, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
        });

        console.log("✅ Cookies set successfully");
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
  },
});

function cryptoRandom() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const crypto: Crypto = globalThis.crypto as Crypto;

export { handler as GET, handler as POST };
