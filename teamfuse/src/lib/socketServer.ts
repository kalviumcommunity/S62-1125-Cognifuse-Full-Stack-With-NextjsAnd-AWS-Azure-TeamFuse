import { Server, Socket } from "socket.io";
import { SessionManager } from "./presence/sessionManager";

const userSockets = new Map<string, Set<string>>();
const socketProjects = new Map<string, string>();

export function socketServer(io: Server) {
  io.on("connection", (socket: Socket) => {
    socket.on("join_chat", ({ projectId }) => {
      socket.join(projectId);
    });

    socket.on("chat:send", ({ projectId, message }) => {
      io.to(projectId).emit("chat:new", message);
    });

    socket.on("chat:typing", ({ projectId, userId }) => {
      socket.to(projectId).emit("chat:typing", { userId });
    });

    socket.on("chat:stop_typing", ({ projectId, userId }) => {
      socket.to(projectId).emit("chat:stop_typing", { userId });
    });

    socket.on("join_project", async ({ projectId, userId }) => {
      socketProjects.set(socket.id, projectId);
      await socket.join(projectId);

      if (!userSockets.has(userId)) userSockets.set(userId, new Set());
      userSockets.get(userId)!.add(socket.id);

      const session = await SessionManager.startSession(userId, projectId);

      io.to(projectId).emit("presence_update", {
        userId,
        projectId,
        status: session.status,
      });
    });

    socket.on("activity", async ({ userId, projectId }) => {
      await SessionManager.resetIdle(userId, projectId);

      io.to(projectId).emit("presence_update", {
        userId,
        projectId,
        status: "ONLINE",
      });
    });

    socket.on("disconnect", async () => {
      const projectId = socketProjects.get(socket.id);
      socketProjects.delete(socket.id);

      if (!projectId) return;

      for (const [userId, sockets] of userSockets.entries()) {
        if (sockets.has(socket.id)) {
          sockets.delete(socket.id);

          if (sockets.size === 0) {
            userSockets.delete(userId);
            await SessionManager.endSession(userId, projectId);

            io.to(projectId).emit("presence_update", {
              userId,
              projectId,
              status: "OFFLINE",
            });
          }
          break;
        }
      }
    });
  });
}
