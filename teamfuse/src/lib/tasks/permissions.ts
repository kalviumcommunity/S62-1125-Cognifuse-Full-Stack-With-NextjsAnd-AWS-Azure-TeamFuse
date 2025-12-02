import { prisma } from "@/lib/prisma";

export async function requireMembership(userId: string, projectId: string) {
  const membership = await prisma.projectMember.findUnique({
    where: {
      userId_projectId: {
        userId,
        projectId,
      },
    },
  });

  if (!membership) {
    return null;
  }
  return membership;
}

export async function requireLeader(userId: string, projectId: string) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project) return null;
  if (project.createdById !== userId) return null;
  return project;
}
