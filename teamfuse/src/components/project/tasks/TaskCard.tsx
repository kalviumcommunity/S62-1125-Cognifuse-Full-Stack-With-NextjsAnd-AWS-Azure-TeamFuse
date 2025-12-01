/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TaskCardProps {
  task: any;
}

export default function TaskCard({ task }: TaskCardProps) {
  const submitForReview = async () => {
    await fetch(`/api/projects/${task.projectId}/tasks/submit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId: task.id }),
    });
    window.location.reload();
  };

  const approve = async () => {
    await fetch(`/api/projects/${task.projectId}/tasks/review`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId: task.id, action: "approve" }),
    });
    window.location.reload();
  };

  const reject = async () => {
    await fetch(`/api/projects/${task.projectId}/tasks/review`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId: task.id, action: "reject" }),
    });
    window.location.reload();
  };

  const progress = task.progress ?? 0;

  return (
    <div className="bg-linear-to-b from-[#0f111a] via-[#141620] to-[#1a1c25] p-4 rounded-lg border border-white/10 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="pr-3">
          <h4 className="font-semibold text-white">{task.title}</h4>
          {task.description && (
            <p className="text-sm text-gray-400 mt-1 line-clamp-3">
              {task.description}
            </p>
          )}
        </div>

        <div className="text-right text-xs text-gray-300">
          <div>{task.priority}</div>
          <div>{task.weight} pts</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {task.assignee?.avatarUrl ? (
            <Image
              src={task.assignee.avatarUrl}
              width={32}
              height={32}
              className="rounded-full"
              alt={task.assignee.name ?? "Assignee"}
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm text-gray-200">
              {task.assignee?.name ? task.assignee.name[0] : "—"}
            </div>
          )}
          <div className="text-sm text-gray-300">
            {task.assignee?.name ?? "Unassigned"}
          </div>
        </div>

        <div className="text-sm text-gray-300">{progress}%</div>
      </div>

      <div className="mt-3">
        <div className="w-full bg-white/6 h-2 rounded overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-2 bg-indigo-500"
          />
        </div>
      </div>

      <div className="mt-3 flex gap-2 flex-wrap">
        {task.status === "IN_PROGRESS" && (
          <Button size="sm" className="flex-1" onClick={submitForReview}>
            Submit for review
          </Button>
        )}

        {task.status === "REVIEW" && (
          <>
            <Button size="sm" className="bg-green-600" onClick={approve}>
              Approve
            </Button>
            <Button size="sm" className="bg-red-600" onClick={reject}>
              Reject
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
