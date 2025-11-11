// src/components/project/overview/AISummary.tsx
export default function AISummary({ overview }: { overview: any }) {
  return (
    <section className="p-6 rounded-2xl bg-gray-900 border border-gray-700">
      <h2 className="text-2xl font-semibold text-white mb-2">AI Summary</h2>
      <p className="text-gray-300">
        This week, {overview.members[0]?.name} completed {overview.stats.activeTasks} tasks
        and contributed to project updates.
      </p>
    </section>
  );
}
