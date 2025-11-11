"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

interface PresenceMap {
  [userId: string]: "ONLINE" | "IDLE" | "OFFLINE";
}

export function usePresence(projectId: string, currentUserId: string) {
  const [presence, setPresence] = useState<PresenceMap>({});

  useEffect(() => {
    if (!projectId || !currentUserId) return;

    // connect to Socket.io via Next.js API route
    const socket = io("/", {
      path: "/api/socket/io",
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.emit("join_project", { projectId, userId: currentUserId });
    });

    socket.on("presence_update", (data) => {
      setPresence((prev) => ({
        ...prev,
        [data.userId]: data.status,
      }));
    });

    // Idle logic (optional)
    const handleIdle = () =>
      socket.emit("status_update", { projectId, userId: currentUserId, status: "IDLE" });
    const handleActive = () =>
      socket.emit("status_update", { projectId, userId: currentUserId, status: "ONLINE" });

    let idleTimer: any;
    const resetIdle = () => {
      clearTimeout(idleTimer);
      handleActive();
      idleTimer = setTimeout(handleIdle, 60_000);
    };

    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);
    resetIdle();

    return () => {
      socket.disconnect();
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };
  }, [projectId, currentUserId]);

  return presence;
}
