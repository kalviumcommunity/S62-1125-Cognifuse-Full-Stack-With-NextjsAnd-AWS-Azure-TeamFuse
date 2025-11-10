// lib/auth-tokens.ts
import { SignJWT, jwtVerify } from "jose";

const accessSecret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET!);
const refreshSecret = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET!);

export type JwtUser = { sub: string; email: string };

export async function signAccessToken(user: JwtUser) {
  return await new SignJWT({ email: user.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.sub)
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(accessSecret);
}

export async function signRefreshToken(user: JwtUser, jti: string) {
  return await new SignJWT({ jti })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.sub)
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(refreshSecret);
}

export async function verifyAccess(token: string) {
  return await jwtVerify(token, accessSecret);
}

export async function verifyRefresh(token: string) {
  return await jwtVerify(token, refreshSecret);
}

export async function hashToken(token: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(token);

  const hash = await crypto.subtle.digest("SHA-256", data);
  return Buffer.from(hash).toString("hex");
}
