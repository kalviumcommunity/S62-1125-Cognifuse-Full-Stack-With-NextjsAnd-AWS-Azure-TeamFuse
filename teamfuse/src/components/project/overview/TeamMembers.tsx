"use client";
import { Github, ListTodo, MessageSquare } from "lucide-react";
import { usePresence } from "@/hooks/usePresence";

export default function TeamMembers({
  members,
  projectId,
  currentUserId,
}: {
  members: any[];
  projectId: string;
  currentUserId: string;
}) {
  const presence = usePresence(projectId, currentUserId);

  const getStatusColor = (status: string | undefined) => {
    switch (status) {
      case "ONLINE":
        return "bg-green-500";
      case "IDLE":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="p-6 rounded-2xl bg-gray-900 border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4">Team Members</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((m) => (
          <div
            key={m.name}
            className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700"
          >
            {/* === Avatar with Presence Dot === */}
            <div className="relative mb-2 h-12 w-12 mx-auto rounded-full bg-gray-700">
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-800 ${getStatusColor(
                  presence[m.id] // compare user.id with presence map
                )}`}
              ></span>
            </div>

            <p className="text-lg text-white font-medium">{m.name}</p>
            <p className="text-xs text-gray-400 mb-2">{m.role}</p>

            {/* === Mini Stats === */}
            <div className="flex justify-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4" /> {m.commits}
              </div>
              <div className="flex items-center gap-1">
                <ListTodo className="w-4 h-4" /> {m.tasks}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" /> {m.messages}
              </div>
            </div>

            {/* === Streak Bar === */}
            <div className="mt-2 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: `${Math.min(m.streak || 0, 7) * 15}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
