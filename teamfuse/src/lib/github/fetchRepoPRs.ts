// lib/github/fetchRepoPRs.ts
import { ParsedPullRequest, ParsedRepoEvent } from "../types/github";

type GithubPrApi = {
  number: number;
  title: string;
  user?: { login?: string };
  state?: string;
  merged_at?: string | null;
  created_at?: string;
  updated_at?: string;
};

export async function fetchRepoPRs(
  token: string,
  owner: string,
  repo: string,
  options?: { perPage?: number; state?: "open" | "closed" | "all" }
): Promise<ParsedRepoEvent> {
  const perPage = options?.perPage ?? 30;
  const state = options?.state ?? "all";

  const params = new URLSearchParams({
    per_page: String(perPage),
    state,
  });

  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch PRs: ${res.status}`);
  }

  const data = (await res.json()) as GithubPrApi[];

  const pullRequests: ParsedPullRequest[] = data.map((pr) => ({
    number: pr.number,
    title: pr.title,
    authorLogin: pr.user?.login ?? undefined,
    state: pr.state ?? "open",
    merged: Boolean(pr.merged_at),
    mergedAt: pr.merged_at ? new Date(pr.merged_at) : null,
    createdAt: pr.created_at ? new Date(pr.created_at) : new Date(),
    updatedAt: pr.updated_at ? new Date(pr.updated_at) : new Date(),
    raw: pr,
  }));

  return { pullRequests };
}
