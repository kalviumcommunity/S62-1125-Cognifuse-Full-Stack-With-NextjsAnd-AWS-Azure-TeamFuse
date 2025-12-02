// lib/github/fetchRepoCommits.ts
import { ParsedCommit, ParsedRepoEvent } from "../types/github";

type GithubCommitApi = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author?: {
      name?: string;
      email?: string;
      date?: string;
    };
  };
};

export async function fetchRepoCommits(
  token: string,
  owner: string,
  repo: string,
  options?: { perPage?: number; since?: string }
): Promise<ParsedRepoEvent> {
  const perPage = options?.perPage ?? 30;
  const params = new URLSearchParams({ per_page: String(perPage) });
  if (options?.since) params.set("since", options.since);

  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch commits: ${res.status}`);
  }

  const data = (await res.json()) as GithubCommitApi[];

  const commits: ParsedCommit[] = data.map((c) => ({
    sha: c.sha,
    message: c.commit.message,
    url: c.html_url,
    authorName: c.commit.author?.name,
    authorEmail: c.commit.author?.email,
    authoredAt: c.commit.author?.date
      ? new Date(c.commit.author.date)
      : undefined,
    raw: c,
  }));

  return { commits };
}
