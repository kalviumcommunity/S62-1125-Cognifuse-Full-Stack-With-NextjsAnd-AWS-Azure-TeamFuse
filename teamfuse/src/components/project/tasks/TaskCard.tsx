"use client";

import { useState } from "react";
import { Task, StatusColumn } from "./TaskBoard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  task: Task;
  onTaskUpdated: () => void;
}

export default function TaskCard({ task, onTaskUpdated }: TaskCardProps) {
  const [loading, setLoading] = useState(false);

  const assigneeName = task.assignee?.name ?? "Unassigned";

  async function changeStatus(next: StatusColumn) {
    setLoading(true);
    try {
      await fetch(`/api/projects/${task.projectId}/tasks/${task.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      await onTaskUpdated();
    } finally {
      setLoading(false);
    }
  }

  async function submitForReview() {
    setLoading(true);
    try {
      await fetch(`/api/projects/${task.projectId}/tasks/submit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskId: task.id }),
      });
      await onTaskUpdated();
    } finally {
      setLoading(false);
    }
  }

  const showStart = task.status === "TODO";
  const showSubmitReview = task.status === "IN_PROGRESS";
  const showReviewActions = task.status === "REVIEW";

  return (
    <div className="group bg-[#151827]/95 backdrop-blur-md border border-white/10 rounded-xl p-5 
      shadow-lg hover:shadow-indigo-700/20 transition-all duration-200
      hover:-translate-y-1 hover:border-indigo-500/40 relative overflow-hidden">

      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
        blur-xl transition-opacity duration-300 pointer-events-none" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-bold text-[16px] text-white tracking-wide">
            {task.title}
          </h4>

          {task.description && (
            <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-3">
              {task.description}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <Badge
              variant="outline"
              className="rounded-full px-2 py-0.5 border-indigo-400/40 text-indigo-200 bg-indigo-500/10"
            >
              {task.priority} priority
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full px-2 py-0.5 border-purple-400/40 text-purple-200 bg-purple-500/10"
            >
              Weight: {task.weight}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full px-2 py-0.5 border-emerald-400/40 text-emerald-200 bg-emerald-500/10"
            >
              {assigneeName}
            </Badge>
          </div>
        </div>

        {/* Status Tag */}
        <Badge
          className="rounded-full text-[10px] px-3 py-1 bg-white/10 border-white/20 text-gray-100 uppercase tracking-wide"
          variant="outline"
        >
          {task.status}
        </Badge>
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2 justify-end">
        {showStart && (
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-[80px]"
            disabled={loading}
            onClick={() => changeStatus("IN_PROGRESS")}
          >
            Start
          </Button>
        )}

        {showSubmitReview && (
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            disabled={loading}
            onClick={submitForReview}
            variant="secondary"
          >
            Submit for review
          </Button>
        )}

        {showReviewActions && (
          <>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600/50 text-gray-30 bg-gray-800/50 hover:border-gray-500 transition-all px-6"
              disabled={loading}
              onClick={() => changeStatus("IN_PROGRESS")}
            >
              Request changes
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              disabled={loading}
              onClick={() => changeStatus("DONE")}
            >
              Approve & mark done
            </Button>
          </>
        )}
      </div>
    </div>
  );
}