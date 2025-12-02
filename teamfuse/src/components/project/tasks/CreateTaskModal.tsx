// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// interface MemberWithUser {
//   user: {
//     id: string;
//     name: string | null;
//   };
// }

// interface CreateTaskModalProps {
//   open: boolean;
//   setOpen: (v: boolean) => void;
//   projectId: string;
//   refresh: () => void;
// }

// export default function CreateTaskModal({
//   open,
//   setOpen,
//   projectId,
//   refresh,
// }: CreateTaskModalProps) {
//   const [members, setMembers] = useState<MemberWithUser[]>([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     weight: 1,
//     priority: "MEDIUM",
//     assigneeId: "",
//   });

//   useEffect(() => {
//     if (!open || !projectId) return;

//     (async () => {
//       try {
//         const res = await fetch(`/api/projects/${projectId}/members`);
//         if (res.ok) {
//           const data = await res.json();
//           setMembers(data);
//         }
//       } catch (e) {
//         console.error("MEMBERS FETCH ERROR:", e);
//       }
//     })();
//   }, [open, projectId]);

//   if (!open) return null;

//   const create = async () => {
//     if (!projectId) return;

//     try {
//       await fetch(`/api/projects/${projectId}/tasks`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       setOpen(false);
//       refresh();
//     } catch (e) {
//       console.error("CREATE TASK ERROR:", e);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl p-8">
//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">
//             Create Task
//           </h3>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-gray-300 hover:text-white transition"
//           >
//             ✕
//           </button>
//         </div>

//         {/* FORM */}
//         <div className="space-y-5">
//           <Input
//             placeholder="Title"
//             className="bg-white/10 border-white/20 text-white"
//             value={form.title}
//             onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
//           />

//           <textarea
//             className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 h-28"
//             placeholder="Description"
//             value={form.description}
//             onChange={(e) =>
//               setForm((f) => ({ ...f, description: e.target.value }))
//             }
//           />

//           <div className="flex gap-4">
//             <Input
//               type="number"
//               min={1}
//               className="w-24 bg-white/10 border-white/20 text-white"
//               value={form.weight}
//               onChange={(e) =>
//                 setForm((f) => ({
//                   ...f,
//                   weight: Number(e.target.value || 1),
//                 }))
//               }
//             />

//             <select
//               className="bg-[#1a1c25]/80 text-white border border-white/20 rounded-xl px-3 py-2 backdrop-blur-xl hover:bg-white/10 transition"
//               value={form.priority}
//               onChange={(e) =>
//                 setForm((f) => ({ ...f, priority: e.target.value }))
//               }
//             >
//               <option className="bg-[#0f111a] text-white" value="LOW">
//                 Low
//               </option>
//               <option className="bg-[#0f111a] text-white" value="MEDIUM">
//                 Medium
//               </option>
//               <option className="bg-[#0f111a] text-white" value="HIGH">
//                 High
//               </option>
//             </select>

//             <select
//               className="flex-1 bg-[#1a1c25]/80 text-white border border-white/20 rounded-xl px-3 py-2 backdrop-blur-xl hover:bg-white/10 transition"
//               value={form.assigneeId}
//               onChange={(e) =>
//                 setForm((f) => ({ ...f, assigneeId: e.target.value }))
//               }
//             >
//               <option className="bg-[#0f111a] text-white" value="">
//                 Unassigned
//               </option>
//               {members.map((m, i) => (
//                 <option
//                   key={`${m.user.id}-${i}`}
//                   className="bg-[#0f111a] text-white"
//                   value={m.user.id}
//                 >
//                   {m.user.name ?? "Unnamed"}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="outline"
//               className="border-white/20 text-gray-200 hover:bg-white/10"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white shadow-lg shadow-purple-600/30"
//               onClick={create}
//             >
//               Create Task
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MemberLite {
  id: string;
  name: string | null;
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

  const [form, setForm] = useState({
    title: "",
    description: "",
    weight: 1,
    priority: "MEDIUM",
    assigneeId: "",
  });

  useEffect(() => {
    if (!open || !projectId) return;

    (async () => {
      try {
        const res = await fetch(`/api/projects/${projectId}/members`);

        if (res.ok) {
          const data: MemberLite[] = await res.json();
          setMembers(data);
        }
      } catch (error) {
        console.error("MEMBERS FETCH ERROR:", error);
      }
    })();
  }, [open, projectId]);

  if (!open) return null;

  const create = async () => {
    if (!projectId) return;

    try {
      await fetch(`/api/projects/${projectId}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setOpen(false);
      refresh();
    } catch (error) {
      console.error("CREATE TASK ERROR:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">
            Create Task
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-5">
          <Input
            placeholder="Title"
            className="bg-[#1a1c25]/90 border-white/20 text-white placeholder:text-gray-400"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />

          <textarea
            className="w-full p-3 bg-[#1a1c25]/90 border border-white/20 rounded-xl text-white placeholder:text-gray-400 h-28 focus:bg-[#1a1c25]/90"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />

          <div className="flex gap-4">
            <Input
              type="number"
              min={1}
              className="w-24 bg-[#1a1c25]/90 border-white/20 text-white"
              value={form.weight}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  weight: Number(e.target.value || 1),
                }))
              }
            />

            <select
              className="bg-[#1a1c25]/90 text-white border border-white/20 rounded-xl px-3 py-2 backdrop-blur-xl focus:bg-[#1a1c25]/90 hover:bg-white/10 transition"
              value={form.priority}
              onChange={(e) =>
                setForm((f) => ({ ...f, priority: e.target.value }))
              }
            >
              <option className="bg-[#0f111a]" value="LOW">
                Low
              </option>
              <option className="bg-[#0f111a]" value="MEDIUM">
                Medium
              </option>
              <option className="bg-[#0f111a]" value="HIGH">
                High
              </option>
            </select>

            <select
              className="flex-1 bg-[#1a1c25]/90 text-white border border-white/20 rounded-xl px-3 py-2 backdrop-blur-xl focus:bg-[#1a1c25]/90 hover:bg-white/10 transition"
              value={form.assigneeId}
              onChange={(e) =>
                setForm((f) => ({ ...f, assigneeId: e.target.value }))
              }
            >
              <option className="bg-[#0f111a]" value="">
                Unassigned
              </option>

              {members.map((m) => (
                <option key={m.id} className="bg-[#0f111a]" value={m.id}>
                  {m.name ?? "Unnamed"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              className="border-white/20 text-gray-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white shadow-lg shadow-purple-600/30"
              onClick={create}
            >
              Create Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
