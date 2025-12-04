"use client";

interface Assignee {
  name?: string | null;
}

interface Task {
  weight?: number | null;
  assignee?: Assignee | null;
}

interface FairnessChartProps {
  tasks?: Task[];
}

export default function FairnessChart({ tasks = [] }: FairnessChartProps) {
  const map: Record<string, number> = {};

  tasks.forEach((t: Task) => {
    const name = t.assignee?.name ?? "Unassigned";
    const weight = t.weight ?? 1;
    map[name] = (map[name] || 0) + weight;
  });

  return (
    <div
      className="
      bg-gradient-to-br from-[#141622]/80 to-[#1c1f2e]/80
      border border-white/10
      rounded-2xl
      p-6
      shadow-2xl
      transition-all
      hover:shadow-indigo-500/20
      hover:border-indigo-300/30
    "
    >
      <h4 className="text-sm font-semibold text-indigo-300 mb-4 tracking-wide">
        Workload Distribution
      </h4>

      <div className="space-y-4">
        {Object.entries(map).map(([name, weight]) => {
          const width = Math.min(100, weight * 12);

          return (
            <div key={name} className="space-y-1">
              <div className="flex justify-between text-xs text-gray-300">
                <span className="truncate max-w-[120px]">{name}</span>
                <span className="font-medium text-indigo-200">{weight} pts</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${width}%` }}
                  className="
                    h-2
                    bg-gradient-to-r from-indigo-500 to-purple-400
                    rounded-full
                    transition-[width]
                    duration-700
                    ease-out
                  "
                ></div>
              </div>
            </div>
          );
        })}

        {Object.keys(map).length === 0 && (
          <div className="text-gray-500 text-xs text-center pt-2">
            No workload assigned
          </div>
        )}
      </div>
    </div>
  );
}