import { projectSchema } from "@/lib/validators/validateProjectInput";
import { parseRepoUrl } from "@/lib/github/parseRepoUrl";
import { checkRepoAccess } from "@/lib/github/checkRepoAccess";
import { checkScopes } from "@/lib/github/checkScopes";
import { createProject, isRepoLinked } from "@/lib/db/projectService";
import { inviteExistingUsers } from "@/lib/db/memberService";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { withAuth } from "@/lib/withAuth";
import { getGitHubToken } from "@/lib/github/getGitHubToken";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { getAllProjectsForUser } from "@/lib/services/projectServices";
import { ensureGithubWebhookForProject } from "@/lib/github/registerWebhook";

export const POST = withAuth(async (req, user) => {
  try {
    const session = await getGitHubToken(user.id);
    if (!session?.accessToken)
      return sendError(
        "Unauthorized — missing GitHub token",
        "UNAUTHORIZED",
        401
      );

    const body = await req.json();
    const { name, description, githubRepo, members } =
      projectSchema.parse(body);

    // 1. Validate and extract owner/repo
    const { owner, repo } = parseRepoUrl(githubRepo);

    // 2. Check scopes
    checkScopes(session.scopes);

    // 3. Verify write access
    await checkRepoAccess(session.accessToken, owner, repo);

    // 4. Prevent duplicate use
    const exists = await isRepoLinked(githubRepo);
    if (exists) {
      return sendError(
        "This repository is already linked to another project.",
        "DUPLICATE_REPO",
        409
      );
    }

    const webhookData = await ensureGithubWebhookForProject(
      session.accessToken,
      owner,
      repo
    );

    // 5. Create project
    const project = await createProject(
      user.id,
      name,
      description,
      githubRepo,
      webhookData
    );

    // 6. Add members
    if (members && members?.length > 0) {
      await inviteExistingUsers(project.id, members);
    }

    return sendSuccess(project, "Project created successfully", 201);
  } catch (err) {
    console.log("Error in POST /api/projects:", err);
    return handleRouteError(err);
  }
});

export const GET = withAuth(async (req, user) => {
  try {
    // Fetch all projects where user is a member
    const { accepted, pending } = await getAllProjectsForUser(user.id);
    return sendSuccess({ accepted, pending }, "Projects fetched successfully");
  } catch (err) {
    console.log("Error in GET /api/projects:", err);
    return handleRouteError(err);
  }
});
