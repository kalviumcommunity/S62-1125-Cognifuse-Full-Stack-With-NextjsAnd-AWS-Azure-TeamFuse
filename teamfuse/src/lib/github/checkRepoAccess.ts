import { AppError } from "../errors/AppError";

export async function checkRepoAccess(
  token: string,
  owner: string,
  repo: string
) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (res.status === 404) throw new Error("Repository not found.");
  if (res.status === 401) throw new Error("Invalid GitHub access token.");
  if (res.status === 403)
    throw new Error("GitHub API rate-limited or access blocked.");

  const repoData = await res.json();

  const permissions = repoData.permissions;

  if (!permissions) {
    throw new Error("Unable to verify repository permissions.");
  }

  const canWrite =
    permissions.push || permissions.admin || permissions.maintain;

  if (!canWrite) {
    throw new AppError(
      "You do not have write access to this repository",
      "FORBIDDEN",
      403
    );
  }

  return true;
}
