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
    <div className="bg-white/3 border border-white/6 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-indigo-200 mb-3">
        Workload Distribution
      </h4>

      <div className="space-y-3">
        {Object.entries(map).map(([name, weight]) => (
          <div key={name}>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <div>{name}</div>
              <div>{weight} pts</div>
            </div>

            <div className="w-full bg-white/6 h-2 rounded">
              <div
                style={{ width: `${Math.min(100, weight * 12)}%` }}
                className="h-2 bg-indigo-500"
              ></div>
            </div>
          </div>
        ))}

        {Object.keys(map).length === 0 && (
          <div className="text-gray-400 text-sm">No data yet</div>
        )}
      </div>
    </div>
  );
}
