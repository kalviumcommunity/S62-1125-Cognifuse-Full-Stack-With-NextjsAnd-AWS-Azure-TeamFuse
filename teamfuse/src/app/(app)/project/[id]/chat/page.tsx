import Chat from "../../../../../components/project/chat/chat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: projectId } = await params;

  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id;

  if (!currentUserId) {
    return <div className="p-6 text-white">Unauthorized</div>;
  }

  const membership = await prisma.projectMember.findFirst({
    where: {
      projectId,
      userId: currentUserId,
      status: "ACCEPTED",
    },
  });

  if (!membership) {
    return <div className="p-6 text-white">No access</div>;
  }

  const members = await prisma.projectMember.findMany({
    where: { projectId, status: "ACCEPTED" },
    include: {
      user: {
        select: { id: true, name: true, avatarUrl: true },
      },
    },
  });

  const messages = await prisma.chatMessage.findMany({
    where: { projectId },
    orderBy: { createdAt: "asc" },
    include: {
      sender: { select: { id: true, name: true, avatarUrl: true } },
    },
  });

  return (
    <div className="h-full">
      <Chat
        currentUserId={currentUserId}
        projectId={projectId}
        members={members}
        initialMessages={messages}
      />
    </div>
  );
}
