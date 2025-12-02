import { Card, CardContent } from "@/components/ui/card";
import { GitCommit, Clock, Brain, Activity } from "lucide-react";
import ProjectCardType from "@/lib/interfaces/ProjectCardType";

export default function DashboardStats({
  projects,
}: {
  projects: ProjectCardType[];
}) {
  const activeProjects = projects.filter((p) => p.status === "ACTIVE").length;
  const totalCommits = projects.reduce((acc, p) => acc + (p.commits || 0), 0);
  const weeklyCommits = [12, 18, 15, 22, 19, 25, 20];

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Quick Stats</h2>

      <div className="space-y-4">
        {/* Active Projects */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg shadow-indigo-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Activity className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Active Projects</p>
                <p className="text-2xl font-bold text-white">
                  {activeProjects}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Commit Bar */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg shadow-purple-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <GitCommit className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Commits (7 days)</p>
                <p className="text-2xl font-bold text-white">{totalCommits}</p>
              </div>
            </div>

            <div className="mt-4 flex items-end gap-1 h-16">
              {weeklyCommits.map((c, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-linear-to-t from-purple-500/30 to-purple-400/80"
                  style={{ height: `${(c / 25) * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Productive Hours */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-lg shadow-orange-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Clock className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Productive Hours</p>
                <p className="text-2xl font-bold text-white">12h 45m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insight */}
        <Card className="bg-linear-to-br from-indigo-500/20 to-purple-600/20 border-white/10 backdrop-blur-xl shadow-lg shadow-indigo-500/30">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-500/30 rounded-lg">
                <Brain className="h-5 w-5 text-indigo-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-200">
                  AI Insight
                </p>
                <p className="text-sm text-indigo-100 mt-1">
                  You contributed to 3 projects this week. Amazing work!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
