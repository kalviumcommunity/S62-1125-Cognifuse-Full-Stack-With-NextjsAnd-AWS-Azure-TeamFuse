// lib/github/updateRepoDb.ts
import { prisma } from "@/lib/prisma";
import {
  ParsedRepoEvent,
  ParsedCommit,
  ParsedPullRequest,
} from "../../types/github";

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  const diff = d.getDate() - day;
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

async function handleCommit(projectId: string, c: ParsedCommit) {
  // Upsert commit
  await prisma.repoCommit.upsert({
    where: { sha: c.sha },
    update: {
      message: c.message,
      url: c.url,
      authorName: c.authorName,
      authorEmail: c.authorEmail,
      authoredAt: c.authoredAt ?? null,
      raw: JSON.parse(JSON.stringify(c.raw)),
    },
    create: {
      projectId,
      sha: c.sha,
      message: c.message,
      url: c.url,
      authorName: c.authorName,
      authorEmail: c.authorEmail,
      authoredAt: c.authoredAt ?? null,
      raw: JSON.parse(JSON.stringify(c.raw)),
    },
  });

  // Try mapping commit author to user by email
  if (c.authorEmail && c.authoredAt) {
    const user = await prisma.user.findFirst({
      where: { email: c.authorEmail },
      select: { id: true },
    });

    if (user) {
      const weekStart = getWeekStart(c.authoredAt);

      await prisma.gitHubActivity.upsert({
        where: {
          projectId_userId_weekStart: {
            projectId,
            userId: user.id,
            weekStart,
          },
        },
        update: {
          commitCount: { increment: 1 },
        },
        create: {
          projectId,
          userId: user.id,
          weekStart,
          commitCount: 1,
          prCount: 0,
          linesAdded: 0,
          linesDeleted: 0,
        },
      });
    }
  }
}

async function handlePullRequest(projectId: string, pr: ParsedPullRequest) {
  await prisma.pullRequest.upsert({
    where: {
      projectId_prNumber: {
        projectId,
        prNumber: pr.number,
      },
    },
    update: {
      title: pr.title,
      authorLogin: pr.authorLogin ?? null,
      state: pr.state,
      merged: pr.merged,
      mergedAt: pr.mergedAt ?? null,
      updatedAt: pr.updatedAt,
      raw: JSON.parse(JSON.stringify(pr.raw)),
    },
    create: {
      projectId,
      prNumber: pr.number,
      title: pr.title,
      authorLogin: pr.authorLogin ?? null,
      state: pr.state,
      merged: pr.merged,
      mergedAt: pr.mergedAt ?? null,
      createdAt: pr.createdAt,
      updatedAt: pr.updatedAt,
      raw: JSON.parse(JSON.stringify(pr.raw)),
    },
  });

  // You could also update GitHubActivity PR counters here if you map authorLogin->user
}

export async function updateRepoDb(
  projectId: string,
  parsed: ParsedRepoEvent
): Promise<void> {
  if (parsed.commits) {
    for (const c of parsed.commits) {
      // you could batch & transaction here if needed
      // but per-commit is fine for MVP
      await handleCommit(projectId, c);
    }
  }

  if (parsed.pullRequests) {
    for (const pr of parsed.pullRequests) {
      await handlePullRequest(projectId, pr);
    }
  }
}
