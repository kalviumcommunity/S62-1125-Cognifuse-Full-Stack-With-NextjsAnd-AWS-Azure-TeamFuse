// lib/github/queue/webhookWorker.ts
import { Worker, Job } from "bullmq";
import { redis } from "@/lib/redis/connection";
import { WebhookJobData } from "./queues";
import { processWebhookEvent } from "@/lib/github/processWebhookEvent";
import { prisma } from "../prisma";
import { invalidateProjectCache } from "../cache/projectCache";

async function handleWebhookJob(job: Job<WebhookJobData>) {
  const { deliveryId, projectId, event, payload } = job.data;

  await prisma.webhookDelivery.update({
    where: { deliveryId },
    data: { status: "PROCESSING" },
  });

  // Optional: mark delivery processed here too if you want
  await processWebhookEvent(projectId, event, payload);

  await invalidateProjectCache(projectId);

  // ---- 3. MARK AS COMPLETED ----
  await prisma.webhookDelivery.update({
    where: { deliveryId },
    data: {
      status: "COMPLETED",
      processedAt: new Date(),
    },
  });
}

export const webhookWorker = new Worker<WebhookJobData>(
  "github_webhooks",
  async (job) => {
    try {
      await handleWebhookJob(job);
    } catch (err) {
      console.error("Webhook job failed:", err);

      const { deliveryId } = job.data;
      // If more retries remain, DO NOT mark as permanently failed
      const isLastAttempt = job.attemptsMade + 1 >= (job.opts.attempts ?? 1);

      if (isLastAttempt && job.data.deliveryId) {
        await prisma.webhookDelivery.update({
          where: { deliveryId },
          data: {
            status: "FAILED",
            processedAt: new Date(),
            error: err instanceof Error ? err.message : "Unknown error",
            retried: { increment: 1 },
          },
        });
      } else {
        // optional: mark status as retrying
        await prisma.webhookDelivery.update({
          where: { id: job.data.deliveryId },
          data: {
            status: "RETRYING",
            retried: { increment: 1 },
          },
        });
      }

      throw err;
    }
  },
  {
    connection: redis,
  }
);

// Optional logging
webhookWorker.on("completed", (job) => {
  console.log(`[github:webhooks] Job ${job.id} completed`);
});

webhookWorker.on("active", (job) => {
  console.log(
    `[github:webhooks] Job ${job?.id} processing for projectId: ${job.data.projectId} event: ${job.data.event}`
  );
});

webhookWorker.on("failed", (job, err) => {
  console.error(`[github:webhooks] Job ${job?.id} failed:`, err);
});
