export interface GitHubAccount {
  provider: "github";
  type: "oauth";
  access_token: string;
  expires_at?: number;
  refresh_token?: string | null;
  scope?: string; // e.g. "repo, read:org, user:email"
  token_type?: string;
}
