"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MemberLite {
  user:{
    id: string;
    name: string | null;
  }
}

interface CreateTaskModalProps {
  open: boolean;
  setOpen: (v: boolean) => void;
  projectId: string;
  refresh: () => void;
}

export default function CreateTaskModal({
  open,
  setOpen,
  projectId,
  refresh,
}: CreateTaskModalProps) {
  const [members, setMembers] = useState<MemberLite[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(true);

  const [form, setForm] = useState({
    title: "",
    description: "",
    weight: 1,
    priority: "MEDIUM",
    assigneeId: "",
  });

  useEffect(() => {
    if (!open || !projectId) return;

    const loadMembers = async () => {
      try {
        const res = await fetch(`/api/projects/${projectId}/members`);
        const data = await res.json();

        if (Array.isArray(data.data)) {
          setMembers(data.data);
        } else {
          console.warn("Unexpected members response:", data);
          setMembers([]);
        }
      } catch (error) {
        console.error("MEMBERS FETCH ERROR:", error);
        setMembers([]);
      } finally {
        setLoadingMembers(false);
      }
    };

    loadMembers();
  }, [open, projectId]);

  if (!open) return null;

  const create = async () => {
    try {
      const res = await fetch(`/api/projects/${projectId}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if(!res.ok) {
        console.error("CREATE TASK FAILED:", await res.text());
        return;
      }

      const data = await res.json();

      console.log("TASK CREATED:", data);

      setOpen(false);
      refresh();
    } catch (error) {
      console.error("CREATE TASK ERROR:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">
              Create New Task
            </h3>
            <p className="text-sm text-gray-400 mt-1">Add a new task to your project</p>
          </div>
          <button 
            onClick={() => setOpen(false)} 
            className="text-gray-400 hover:text-white transition-all p-2 hover:bg-white/5 rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
            <Input
              placeholder="Enter task title"
              className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors h-32"
              placeholder="Describe the task details..."
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            />
          </div>

          {/* Priority / Weight / Assignee */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Weight */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Weight</label>
              <Input
                type="number"
                min={1}
                className="bg-gray-800/50 border-gray-600/50 text-white"
                value={form.weight}
                onChange={(e) =>
                  setForm((f) => ({ ...f, weight: Number(e.target.value || 1) }))
                }
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
              <select
                className="w-full bg-gray-800/50 text-white border border-gray-600/50 rounded-lg px-3 py-2 focus:border-indigo-500/50 transition-colors"
                value={form.priority}
                onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value }))}
              >
                <option value="LOW" className="bg-gray-800">Low</option>
                <option value="MEDIUM" className="bg-gray-800">Medium</option>
                <option value="HIGH" className="bg-gray-800">High</option>
              </select>
            </div>

            {/* Assignee */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Assignee</label>
              <select
                className="w-full bg-gray-800/50 text-white border border-gray-600/50 rounded-lg px-3 py-2 focus:border-indigo-500/50 transition-colors"
                value={form.assigneeId}
                onChange={(e) => setForm((f) => ({ ...f, assigneeId: e.target.value }))}
                disabled={loadingMembers}
              >
                <option value="" className="bg-gray-800">Unassigned</option>
                {!loadingMembers && Array.isArray(members) &&
                  members.map((m) => (
                    <option key={m.user.id} value={m.user.id} className="bg-gray-800">
                      {m.user.name ?? "Unnamed"}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
            <Button 
              variant="outline" 
              className="border-gray-600/50 text-gray-30 bg-gray-800/50 hover:text-white hover:border-gray-500 transition-all px-6"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-purple-500/20 px-6"
              onClick={create}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Task
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}