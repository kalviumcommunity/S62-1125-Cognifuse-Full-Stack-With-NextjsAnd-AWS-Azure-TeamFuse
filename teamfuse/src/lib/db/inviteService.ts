import { prisma } from "@/lib/prisma";

export async function createInvites(projectId: string, emails: string[]) {
  return prisma.invite.createMany({
    data: emails.map((email) => ({
      email,
      projectId,
    })),
  });
}
