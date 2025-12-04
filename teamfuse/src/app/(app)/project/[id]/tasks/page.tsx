/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import TaskBoard from "@/components/project/tasks/TaskBoard";
import CreateTaskModal from "@/components/project/tasks/CreateTaskModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ⬇️ NEW IMPORTS
import FairnessChart from "@/components/project/tasks/FairnessChart";
import QuickStats from "@/components/project/tasks/QuickStats";

export default function TaskSpacePage() {
  const params = useParams<{ id: string }>();
  const projectId = params.id;

  const [tasks, setTasks] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const fetchTasks = useCallback(async () => {
    if (!projectId) return;

    try {
      const res = await fetch(`/api/projects/${projectId}/tasks`, {
        cache: "no-store",
      });
      const data = await res.json();

      if (Array.isArray(data.data)) {
        setTasks(data.data);
      } else {
        setTasks([]);
      }
    } catch {
      setTasks([]);
    }
  }, [projectId]);

  useEffect(() => {
    const load = async () => {
      await fetchTasks();
    };
    load();
  }, [fetchTasks]);

  const filtered = Array.isArray(tasks)
    ? tasks.filter((t) =>
        t?.title?.toLowerCase()?.includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen relative bg-[#0d0f18] text-white">
      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[250px]">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Project Tasks
              </h1>
              <p className="text-gray-400 text-sm">To Do · In Progress · Done</p>
            </div>

            <div className="flex-1">
              <Input
                placeholder="Search tasks..."
                className="bg-[#202232] border-white/10 text-white"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <Button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              onClick={() => setOpen(true)}
            >
              + New Task
            </Button>
          </div>

          {/* ⬇️ UPDATED SIDEBAR WITH QUICK STATS */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <TaskBoard
                tasks={filtered}
                projectId={projectId}
                refresh={fetchTasks}
              />
            </div>

            <div className="space-y-6">
              <FairnessChart tasks={tasks} />
              <QuickStats tasks={tasks} /> {/* Added */}
            </div>
          </div>
        </div>
      </main>

      <CreateTaskModal
        open={open}
        setOpen={setOpen}
        projectId={projectId}
        refresh={fetchTasks}
      />
    </div>
  );
}