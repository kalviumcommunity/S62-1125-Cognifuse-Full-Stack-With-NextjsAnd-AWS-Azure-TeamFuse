import { prisma } from "@/lib/prisma";
import { webhookData } from "../github/registerWebhook";

export async function createProject(
  userId: string,
  name: string,
  description: string | undefined,
  githubRepo: string,
  webhookData: webhookData
) {
  return prisma.project.create({
    data: {
      name,
      description,
      githubRepo,
      createdById: userId,
      githubRepoId: webhookData.githubRepoId,
      githubWebhookSecret: webhookData.githubWebhookSecret,
      members: {
        create: {
          userId,
          role: "LEADER",
          status: "ACCEPTED",
        },
      },
    },
  });
}

export async function isRepoLinked(repo: string) {
  return prisma.project.findFirst({
    where: { githubRepo: repo },
  });
}
