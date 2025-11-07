import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { GitCommit, Clock, Brain, Activity } from "lucide-react";
import ProjectCardType from "@/lib/interfaces/ProjectCardType";

function DashboardStats({ mockProjects }: { mockProjects: ProjectCardType[] }) {
  const activeProjects = mockProjects.filter(
    (p) => p.status === "active"
  ).length;
  const totalCommits = mockProjects.reduce((acc, p) => acc + p.commits, 0);
  const weeklyCommits = [12, 18, 15, 22, 19, 25, 20];
  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Stats</h2>
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Activity className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Active Projects</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {activeProjects}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GitCommit className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Commits (7 days)</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {totalCommits}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-end gap-1 h-12">
              {weeklyCommits.map((commits, i) => (
                <div
                  key={i}
                  className="flex-1 bg-purple-200 rounded-t"
                  style={{ height: `${(commits / 25) * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Productive Hours</p>
                <p className="text-2xl font-bold text-slate-900">12h 45m</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">AI Insight</p>
                <p className="text-sm text-blue-700 mt-1">
                  You contributed to 3 projects this week. Great collaboration!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardStats;
