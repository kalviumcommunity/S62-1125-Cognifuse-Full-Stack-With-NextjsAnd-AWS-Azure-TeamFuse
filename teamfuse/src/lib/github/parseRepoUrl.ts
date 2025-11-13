export function parseRepoUrl(url: string) {
  const regex =
    /^(https?:\/\/)?(www\.)?github\.com\/([^\/]+)\/([^\/]+)(\.git)?\/?$/;

  const match = url.match(regex);
  if (!match) {
    throw new Error("Invalid GitHub repository URL");
  }

  return {
    owner: match[3],
    repo: match[4],
  };
}
