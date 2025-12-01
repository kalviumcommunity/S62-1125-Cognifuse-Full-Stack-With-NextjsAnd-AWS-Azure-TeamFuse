/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TaskBoard from "@/components/project/tasks/TaskBoard";
import FairnessChart from "@/components/project/tasks/FairnessChart";
import Insights from "@/components/project/tasks/Insights";
import CreateTaskModal from "@/components/project/tasks/CreateTaskModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TaskSpacePage() {
  const params = useParams<{ id: string }>();
  const projectId = params.id;

  const [tasks, setTasks] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const fetchTasks = async () => {
    if (!projectId) return;

    try {
      const res = await fetch(`/api/projects/${projectId}/tasks`, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      }
    } catch (e) {
      console.error("TASK FETCH ERROR:", e);
    }
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen relative bg-linear-to-b from-[#0f111a] via-[#141620] to-[#1a1c25] text-white overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex relative z-10">
        {/* SIDEBAR */}
        <aside className="w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 min-h-[100vh]">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-indigo-300">
                Task Space
              </h2>
              <p className="text-gray-400 text-sm">
                Manage tasks for this project
              </p>
            </div>

            {/* SEARCH + QUICK STATS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search tasks..."
                  className="bg-white/5 border-white/10 text-white"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                <Button size="sm" onClick={() => setOpen(true)}>
                  + New
                </Button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-sm text-gray-300">Quick Stats</div>
                <div className="mt-3 space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Total tasks</span>
                    <span>{tasks.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In progress</span>
                    <span>
                      {
                        tasks.filter(
                          (t) =>
                            t.status === "IN_PROGRESS" || t.status === "REVIEW"
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <span>
                      {tasks.filter((t) => t.status === "DONE").length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHART & INSIGHTS */}
            <FairnessChart tasks={tasks} />
            <Insights />
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-10">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold bg-linear-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Project Tasks
                </h1>
                <p className="text-gray-400">To Do · In Progress · Done</p>
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={fetchTasks}>Refresh</Button>
                <Button onClick={() => setOpen(true)}>+ New Task</Button>
              </div>
            </div>

            <TaskBoard
              tasks={filtered}
              projectId={projectId}
              refresh={fetchTasks}
            />
          </div>
        </main>
      </div>

      <CreateTaskModal
        open={open}
        setOpen={setOpen}
        projectId={projectId}
        refresh={fetchTasks}
      />
    </div>
  );
}
