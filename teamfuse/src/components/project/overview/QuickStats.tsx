// src/components/project/overview/QuickStats.tsx
export default function QuickStats({ stats }: { stats: any }) {
  return (
    <section className="p-6 rounded-2xl bg-gray-900 border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-4">Quick Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-purple-400">{stats.totalCommits}</p>
          <p className="text-gray-400">Commits</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-400">{stats.activeTasks}</p>
          <p className="text-gray-400">Active Tasks</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-pink-400">{stats.totalMessages}</p>
          <p className="text-gray-400">Messages</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-400">
            {new Date(stats.lastUpdated).toLocaleTimeString()}
          </p>
          <p className="text-gray-400">Last Update</p>
        </div>
      </div>
    </section>
  );
}
