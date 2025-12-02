// lib/github/parseWebhookEvent.ts
import {
  ParsedRepoEvent,
  ParsedCommit,
  ParsedPullRequest,
} from "@/lib/types/github";

type GithubPushCommit = {
  id: string;
  message: string;
  timestamp: string;
  url: string;
  author?: {
    name?: string;
    email?: string;
  };
};

type GithubPushPayload = {
  commits?: GithubPushCommit[];
};

type GithubPrPayload = {
  action?: string;
  number?: number;
  pull_request?: {
    title?: string;
    user?: { login?: string };
    state?: string;
    merged?: boolean;
    merged_at?: string | null;
    created_at?: string;
    updated_at?: string;
  };
};

export function parseWebhookEvent(
  event: string,
  payload: unknown
): ParsedRepoEvent {
  if (event === "push") {
    const p = payload as GithubPushPayload;
    const commits: ParsedCommit[] = (p.commits ?? []).map((c) => ({
      sha: c.id,
      message: c.message,
      url: c.url,
      authorName: c.author?.name,
      authorEmail: c.author?.email,
      authoredAt: c.timestamp ? new Date(c.timestamp) : undefined,
      raw: c,
    }));

    return { commits };
  }

  if (event === "pull_request") {
    const p = payload as GithubPrPayload;
    const pr = p.pull_request;
    if (!pr || p.number == null) return {};

    const parsedPr: ParsedPullRequest = {
      number: p.number,
      title: pr.title ?? "",
      authorLogin: pr.user?.login ?? undefined,
      state: pr.state ?? "open",
      merged: pr.merged ?? false,
      mergedAt: pr.merged_at ? new Date(pr.merged_at) : null,
      createdAt: pr.created_at ? new Date(pr.created_at) : new Date(),
      updatedAt: pr.updated_at ? new Date(pr.updated_at) : new Date(),
      raw: pr,
    };

    return { pullRequests: [parsedPr] };
  }

  // Other event types can be handled later
  return {};
}
