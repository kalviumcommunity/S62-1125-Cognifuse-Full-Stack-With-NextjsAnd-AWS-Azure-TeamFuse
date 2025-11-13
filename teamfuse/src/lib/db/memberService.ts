import { prisma } from "@/lib/prisma";

export async function inviteExistingUsers(projectId: string, emails: string[]) {
  const users = await prisma.user.findMany({
    where: { email: { in: emails } },
  });

  const promises = users.map((u) => {
    return prisma.projectMember.create({
      data: {
        userId: u.id,
        projectId,
        role: "MEMBER",
        status: "PENDING",
      },
    });
  });

  return Promise.all(promises);
}
