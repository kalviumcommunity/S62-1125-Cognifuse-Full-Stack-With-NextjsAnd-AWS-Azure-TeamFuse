// lib/github/processWebhookEvent.ts
import { parseWebhookEvent } from "./parseWebhookEvent";
import { updateRepoDb } from "../db/github/updateRepoDB";

export async function processWebhookEvent(
  projectId: string,
  event: string,
  payload: unknown
): Promise<void> {
  const parsed = parseWebhookEvent(event, payload);
  await updateRepoDb(projectId, parsed);
}
