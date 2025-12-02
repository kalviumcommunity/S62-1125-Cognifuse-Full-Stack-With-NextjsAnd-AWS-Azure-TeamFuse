import { encrypt } from "@/lib/crypto/encryption";
import { AppError } from "../errors/AppError";

type RepoInfo = {
  id: number;
  full_name: string; // "owner/repo"
};

export type webhookData = {
  githubRepoId: number;
  githubWebhookSecret: string;
};

async function fetchRepoInfo(
  token: string,
  owner: string,
  repo: string
): Promise<RepoInfo> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch repo info: ${res.status}`);
  }

  const data = (await res.json()) as { id: number; full_name: string };
  return { id: data.id, full_name: data.full_name };
}

function generateWebhookSecret(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function ensureGithubWebhookForProject(
  token: string,
  owner: string,
  repo: string
) {
  const repoInfo = await fetchRepoInfo(token, owner, repo);

  console.log("repoInfo", repoInfo);

  // generate secret and create webhook
  const rawSecret = generateWebhookSecret();

  const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/github`;

  console.log("Creating webhook for", owner, repo, "->", webhookUrl);

  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/hooks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "web",
        active: true,
        events: ["push", "pull_request"],
        config: {
          url: webhookUrl,
          content_type: "json",
          insecure_ssl: "0",
          secret: rawSecret,
        },
      }),
    }
  );

  const body = await res.json();
  console.log("create hook status", res.status, body);

  if (!res.ok && res.status !== 422) {
    // 422 often means "hook already exists with same config"
    console.log("Full response body:", body);
    throw new AppError(
      `Failed to create GitHub webhook: ${res.status}`,
      "GITHUB_ERROR",
      501
    );
  }

  if (res.status === 422) {
    // Provide clearer developer message
    const msg = body?.errors?.[0]?.message ?? body;
    throw new AppError(
      `GitHub refused webhook (422): ${msg}. Use a publicly reachable HTTPS URL (ngrok/localtunnel/cloudflared) for NEXT_PUBLIC_APP_URL.`,
      "GITHUB_ERROR",
      422
    );
  }

  return { githubRepoId: repoInfo.id, githubWebhookSecret: encrypt(rawSecret) };
}
