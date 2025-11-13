import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { runOAuthFlow } from "@/lib/auth/runOAuthFlow";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "repo read:org read:user user:email",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!account || !account.providerAccountId || !user.email) {
        console.error("Missing OAuth account info");
        return false;
      }

      await runOAuthFlow({
        email: user.email!,
        name: user.name!,
        avatar: user.image!,
        oauthProvider: "github",
        oauthId: account.providerAccountId,

        githubAccessToken: account.access_token!,
        githubScopes: account.scope!,
      });

      return true;
    },
  },
});

export { handler as GET, handler as POST };
