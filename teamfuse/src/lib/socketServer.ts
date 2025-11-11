// src/lib/socketServer.ts
import { Server } from "socket.io";
import { prisma } from "./prisma";

let io: Server | null = null;

export function initSocket(server: any) {
  if (io) return io; // already initialized

  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  const activeUsers: Record<string, Set<string>> = {}; // projectId => Set<userId>

  io.on("connection", (socket) => {
    socket.on("join_project", async ({ projectId, userId }) => {
      socket.join(projectId);

      // Add user to active map
      if (!activeUsers[projectId]) activeUsers[projectId] = new Set();
      activeUsers[projectId].add(userId);

      await prisma.presenceSession.upsert({
        where: {
          userId_projectId: {
            userId,
            projectId,
          } as any,
        },
        update: { status: "ONLINE", lastActive: new Date() },
        create: { userId, projectId, status: "ONLINE" },
      });

      io.to(projectId).emit("presence_update", {
        projectId,
        userId,
        status: "ONLINE",
        activeCount: activeUsers[projectId].size,
      });
    });

    socket.on("status_update", async ({ projectId, userId, status }) => {
      await prisma.presenceSession.updateMany({
        where: { userId, projectId, endedAt: null },
        data: { status, lastActive: new Date() },
      });
      io.to(projectId).emit("presence_update", { userId, status });
    });

    socket.on("leave_project", async ({ projectId, userId }) => {
      if (activeUsers[projectId]) activeUsers[projectId].delete(userId);

      await prisma.presenceSession.updateMany({
        where: { userId, projectId, endedAt: null },
        data: { status: "OFFLINE", endedAt: new Date() },
      });

      io.to(projectId).emit("presence_update", {
        userId,
        status: "OFFLINE",
        activeCount: activeUsers[projectId]?.size || 0,
      });
    });
  });

  return io;
}
