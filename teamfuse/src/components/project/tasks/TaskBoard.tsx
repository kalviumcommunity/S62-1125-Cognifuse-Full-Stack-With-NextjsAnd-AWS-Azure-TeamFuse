/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

export type StatusColumn = "TODO" | "IN_PROGRESS" | "REVIEW" | "DONE";

export interface Task {
  id: string;
  title: string;
  description?: string;
  weight: number;
  priority: string;
  status: StatusColumn;
  projectId: string;
  assignee?: {
    name?: string;
  };
}

import TaskCard from "./TaskCard";

interface Props {
  tasks: any[];
  projectId: string;
  refresh: () => void;
}

export default function TaskBoard({ tasks, refresh }: Props) {
  const columns = [
    { title: "To Do", status: "TODO" },
    { title: "In Progress", status: "IN_PROGRESS" },
    { title: "Under Review", status: "REVIEW" },
    { title: "Done", status: "DONE" },
  ];

  const grouped: Record<string, any[]> = {
    TODO: [],
    IN_PROGRESS: [],
    REVIEW: [],
    DONE: [],
  };

  tasks?.forEach((t) => {
    if (t?.status && grouped[t.status]) {
      grouped[t.status].push(t);
    }
  });

  return (
    <div className="grid grid-cols-2 gap-6 mt-6 task-board-scroll">
      {columns.map((col) => (
        <div
          key={col.status}
          className="bg-gradient-to-b from-white/10 to-white/[0.05]
          border border-white/15 backdrop-blur-xl rounded-xl shadow-xl p-5
          flex flex-col h-[420px]"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-indigo-200 tracking-wide">
              {col.title}
            </h2>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
              {grouped[col.status].length} tasks
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {grouped[col.status].length === 0 ? (
              <p className="text-xs text-gray-400 text-center mt-10">No tasks</p>
            ) : (
              grouped[col.status].map((task) => (
                <TaskCard key={task.id} task={task} onTaskUpdated={refresh} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}