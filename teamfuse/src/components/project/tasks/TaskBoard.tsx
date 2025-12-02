/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

interface TaskBoardProps {
  tasks: any[];
  projectId: string;
  refresh: () => void;
}

const STATUS_KEYS = ["TODO", "IN_PROGRESS", "DONE"] as const;
type StatusKey = (typeof STATUS_KEYS)[number];

const COLUMN_CONFIG: { key: StatusKey; label: string }[] = [
  { key: "TODO", label: "To Do" },
  { key: "IN_PROGRESS", label: "In Progress" },
  { key: "DONE", label: "Done" },
];

export default function TaskBoard({
  tasks,
  projectId,
  refresh,
}: TaskBoardProps) {
  const groups: Record<StatusKey, any[]> = {
    TODO: tasks.filter((t) => t.status === "TODO"),
    IN_PROGRESS: tasks.filter((t) => t.status === "IN_PROGRESS"),
    DONE: tasks.filter((t) => t.status === "DONE"),
  };

  async function updateStatus(taskId: string, status: StatusKey) {
    await fetch(`/api/projects/${projectId}/tasks/${taskId}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    refresh();
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const newStatus = result.destination.droppableId as StatusKey;
    updateStatus(result.draggableId, newStatus);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLUMN_CONFIG.map((col) => (
          <Column
            key={col.key}
            droppableId={col.key}
            title={col.label}
            tasks={groups[col.key]}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

function Column({
  droppableId,
  title,
  tasks,
}: {
  droppableId: StatusKey;
  title: string;
  tasks: any[];
}) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-white/10 border border-white/10 rounded-xl p-5 min-h-[550px] backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-indigo-200 mb-4">
            {title}
          </h3>

          <div className="space-y-4">
            {tasks.length === 0 && (
              <p className="text-gray-400 text-sm">No tasks</p>
            )}

            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(dragProvided) => (
                  <div
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                    ref={dragProvided.innerRef}
                    className="transition-transform hover:scale-[1.02]"
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
