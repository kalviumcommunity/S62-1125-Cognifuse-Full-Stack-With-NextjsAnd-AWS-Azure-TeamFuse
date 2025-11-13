export function checkScopes(scope: string | null) {
  if (!scope) {
    throw new Error(
      `Missing required GitHub permissions. Please log in again.`
    );
  }
  const needed = ["repo", "read:org", "user:email"];

  const scopes = scope?.split(",").map((s: string) => s.trim()) || [];

  const missing = needed.filter((s) => !scopes.includes(s));

  if (missing.length > 0) {
    throw new Error(
      `Missing required GitHub permissions: ${missing.join(", ")}. Please log in again.`
    );
  }
}
