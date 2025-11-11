"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function PresenceWidget({ projectId }: { projectId: string }) {
  const [members, setMembers] = useState<any[]>([]);

  // Fetch from API
  async function fetchPresence() {
    try {
      const res = await fetch(`/api/projects/${projectId}/presence`);
      const json = await res.json();
      if (json.success) setMembers(json.data);
    } catch (err) {
      console.error("Error fetching presence:", err);
    }
  }

  useEffect(() => {
    fetchPresence();
    const interval = setInterval(fetchPresence, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, [projectId]);

  // Connect to socket for real-time updates
  useEffect(() => {
    const socket = io("/", { path: "/api/socket/io", transports: ["websocket"] });
    socket.on("presence_update", (data) => {
      setMembers((prev) =>
        prev.map((m) =>
          m.userId === data.userId ? { ...m, status: data.status } : m
        )
      );
    });
    return () => socket.disconnect();
  }, [projectId]);

  // Format minutes nicely
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getColor = (status: string) => {
    switch (status) {
      case "ONLINE":
        return "text-green-400";
      case "IDLE":
        return "text-yellow-400";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Team Presence</h3>

      <ul className="space-y-3">
        {members.map((m) => (
          <li
            key={m.userId}
            className="flex items-center justify-between bg-gray-900 border border-gray-800 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-900 ${m.status === "ONLINE"
                    ? "bg-green-500"
                    : m.status === "IDLE"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                    }`}
                ></span>
              </div>
              <div>
                <p className="text-sm text-white">{m.name}</p>
                <p className="text-xs text-gray-400">
                  Active: {formatDuration(m.totalActiveMinutes)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
