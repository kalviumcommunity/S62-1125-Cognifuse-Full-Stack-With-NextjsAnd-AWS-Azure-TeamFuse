import { prisma } from "@/lib/prisma";

export async function createProject(
  userId: string,
  name: string,
  description: string | undefined,
  githubRepo: string
) {
  return prisma.project.create({
    data: {
      name,
      description,
      githubRepo,
      createdById: userId,
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
