// lib/github/queue/syncWorker.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Worker, Job } from "bullmq";
import { redis } from "@/lib/redis/connection";
import { SyncJobData } from "./queues";
import { prisma } from "@/lib/prisma";
import { fetchRepoCommits } from "@/lib/github/fetchRepoCommits";
import { fetchRepoPRs } from "@/lib/github/fetchRepoPRs";
import { updateRepoDb } from "@/lib/db/github/updateRepoDB";
import { getGitHubToken } from "@/lib/github/getGitHubToken";
import { parseRepoUrl } from "@/lib/github/parseRepoUrl";
import { invalidateProjectCache } from "../cache/projectCache";

async function handleSyncJob(job: Job<SyncJobData>) {
  const { syncId, projectId, userId } = job.data;

  await prisma.projectSync.update({
    where: { id: syncId },
    data: { status: "PROCESSING" },
  });

  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project || !project.githubRepo) {
    throw new Error("Project not found or not linked to GitHub");
  }

  const { accessToken } = await getGitHubToken(userId);
  const { owner, repo } = parseRepoUrl(project.githubRepo);

  // For MVP: simple single-page fetch for commits and PRs
  const commitsEvent = await fetchRepoCommits(accessToken, owner, repo, {
    perPage: 50,
  });

  const prsEvent = await fetchRepoPRs(accessToken, owner, repo, {
    perPage: 50,
    state: "all",
  });

  // Merge both into a single ParsedRepoEvent
  const combined = {
    commits: commitsEvent.commits,
    pullRequests: prsEvent.pullRequests,
  };

  await updateRepoDb(projectId, combined);

  // You can also set a "lastSyncedAt" on project here
  await prisma.project.update({
    where: { id: projectId },
    data: { lastActive: new Date() },
  });

  await invalidateProjectCache(projectId);

  await prisma.projectSync.update({
    where: { id: syncId },
    data: {
      status: "COMPLETED",
      finishedAt: new Date(),
    },
  });
}

export const syncWorker = new Worker<SyncJobData>(
  "github_sync",
  async (job) => {
    try {
      await handleSyncJob(job);
    } catch (err) {
      console.error("Sync job failed:", err);

      // If more retries remain, DO NOT mark as permanently failed
      const isLastAttempt = job.attemptsMade + 1 >= (job.opts.attempts ?? 1);

      if (isLastAttempt && job.data.syncId) {
        await prisma.projectSync.update({
          where: { id: job.data.syncId },
          data: {
            status: "FAILED",
            finishedAt: new Date(),
            error: err instanceof Error ? err.message : "Unknown error",
            retried: { increment: 1 },
          },
        });
      } else {
        // optional: mark status as retrying
        await prisma.projectSync.update({
          where: { id: job.data.syncId },
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

syncWorker.on("completed", (job) => {
  console.log(`[github:sync] Job ${job.id} completed`);
});

syncWorker.on("active", (job) => {
  console.log(
    `[github:sync] Job ${job?.id} processing for projectId: ${job.data.projectId}`
  );
});

syncWorker.on("failed", (job, err) => {
  console.error(`[github:sync] Job ${job?.id} failed:`, err);
});
