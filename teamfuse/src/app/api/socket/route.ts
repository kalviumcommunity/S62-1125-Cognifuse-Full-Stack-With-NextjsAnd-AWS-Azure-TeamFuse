// src/app/api/socket/route.ts
import { Server as SocketIOServer } from "socket.io";
import { NextRequest } from "next/server";

const ioMap = global as unknown as { io?: SocketIOServer };

export const GET = async (req: NextRequest) => {
  // @ts-ignore
  if (!ioMap.io) {
    console.log("🟢 Initializing Socket.io server inside Next.js...");

    // Create a new Socket.io server
    const io = new SocketIOServer({
      path: "/api/socket/io", // socket endpoint (avoid conflict)
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    ioMap.io = io;

    // Handle connections
    io.on("connection", (socket) => {
      console.log("✅ Client connected:", socket.id);

      socket.on("join_project", ({ projectId, userId }) => {
        socket.join(projectId);
        console.log(`📡 ${userId} joined project ${projectId}`);

        io.to(projectId).emit("presence_update", {
          userId,
          projectId,
          status: "ONLINE",
        });
      });

      socket.on("status_update", ({ projectId, userId, status }) => {
        io.to(projectId).emit("presence_update", { projectId, userId, status });
      });

      socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
      });
    });
  }

  return new Response("Socket server running", { status: 200 });
};
