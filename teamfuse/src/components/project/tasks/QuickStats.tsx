"use client";

import { CheckCircle, Loader2, ListTodo } from "lucide-react";

interface Task {
  status?: string;
}

interface QuickStatsProps {
  tasks?: Task[];
}

export default function QuickStats({ tasks = [] }: QuickStatsProps) {
  const total = tasks.length;
  const inProgress = tasks.filter(
    (t) => t.status === "IN_PROGRESS" || t.status === "REVIEW"
  ).length;
  const completed = tasks.filter((t) => t.status === "DONE").length;

  return (
    <div
      className="
        bg-gradient-to-br from-[#141622]/80 to-[#1c1f2e]/80
        border border-white/10
        rounded-2xl
        p-6
        shadow-2xl
        transition-all
        hover:shadow-indigo-600/20
        hover:border-indigo-300/30
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-indigo-300 tracking-wide">
        Quick Stats
      </h3>

      {/* Divider */}
      <div className="mt-3 border-t border-white/10"></div>

      {/* Stats */}
      <div className="mt-4 space-y-4 text-sm">
        {/* Total */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-300">
            <ListTodo size={16} />
            <span>Total Tasks</span>
          </div>
          <span className="font-extrabold text-white text-base">
            {total}
          </span>
        </div>

        {/* In Progress */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-300">
            <Loader2 size={16} className="animate-spin-slow text-yellow-300" />
            <span>In Progress</span>
          </div>
          <span className="font-extrabold text-yellow-300 text-base">
            {inProgress}
          </span>
        </div>

        {/* Completed */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle size={16} className="text-emerald-400" />
            <span>Completed</span>
          </div>
          <span className="font-extrabold text-emerald-400 text-base">
            {completed}
          </span>
        </div>
      </div>

      {/* Empty State */}
      {total === 0 && (
        <p className="text-gray-500 text-xs text-center pt-2">
          No tasks yet
        </p>
      )}
    </div>
  );
}