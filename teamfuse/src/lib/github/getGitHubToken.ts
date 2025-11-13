import { prisma } from "@/lib/prisma";
import { decrypt } from "../crypto/encryption";

export async function getGitHubToken(userId: string) {
  const oauth = await prisma.userOAuth.findFirst({
    where: { userId, provider: "github" },
  });

  if (!oauth) {
    throw new Error("GitHub OAuth not found for user");
  }

  return {
    accessToken: decrypt(oauth.accessTokenEnc),
    scopes: oauth.scopes,
    githubId: oauth.providerUserId,
  };
}
