// app/api/projects/route.ts
import { NextRequest } from "next/server";
import { withAuth } from "@/lib/withAuth";
import { projectSchema } from "@/lib/validators/validateProjectInput";
import { parseRepoUrl } from "@/lib/github/parseRepoUrl";
import { checkRepoAccess } from "@/lib/github/checkRepoAccess";
import { checkScopes } from "@/lib/github/checkScopes";
import { createProject, isRepoLinked } from "@/lib/db/projectService";
import { inviteExistingUsers } from "@/lib/db/memberService";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { getGitHubToken } from "@/lib/github/getGitHubToken";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { getAllProjectsForUser } from "@/lib/services/projectServices";
import { ensureGithubWebhookForProject } from "@/lib/github/registerWebhook";

type EmptyParams = Record<string, never>;

export async function POST(
  req: NextRequest,
  context: { params: Promise<EmptyParams> } // explicit empty params type that won't trigger the linter
) {
  const params = await context.params;
  return withAuth(async (req: NextRequest, user) => {
    try {
      // validate GitHub token for user
      const token = await getGitHubToken(user.id);
      if (!token?.accessToken) {
        return sendError(
          "Unauthorized — missing GitHub token",
          "UNAUTHORIZED",
          401
        );
      }

      const body = await req.json();
      const { name, description, githubRepo, members } =
        projectSchema.parse(body);

      const { owner, repo } = parseRepoUrl(githubRepo);
      checkScopes(token.scopes);
      await checkRepoAccess(token.accessToken, owner, repo);

      const exists = await isRepoLinked(githubRepo);
      if (exists) {
        return sendError(
          "This repository is already linked to another project.",
          "DUPLICATE_REPO",
          409
        );
      }

      const webhookData = await ensureGithubWebhookForProject(
        token.accessToken,
        owner,
        repo
      );

      const project = await createProject(
        user.id,
        name,
        description,
        githubRepo,
        webhookData
      );

      if (Array.isArray(members) && members.length > 0) {
        await inviteExistingUsers(project.id, members);
      }

      return sendSuccess(project, "Project created successfully", 201);
    } catch (err) {
      console.error("Error in POST /api/projects:", err);
      return handleRouteError(err);
    }
  })(req, { params });
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<EmptyParams> }
) {
  const params = await context.params;
  return withAuth(async (_req: NextRequest, user) => {
    try {
      const { accepted, pending } = await getAllProjectsForUser(user.id);
      return sendSuccess(
        { accepted, pending },
        "Projects fetched successfully"
      );
    } catch (err) {
      console.error("Error in GET /api/projects:", err);
      return handleRouteError(err);
    }
  })(req, { params });
}
