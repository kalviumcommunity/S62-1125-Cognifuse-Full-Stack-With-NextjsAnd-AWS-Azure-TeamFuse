"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, Filter } from "lucide-react";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectCardType from "@/lib/interfaces/ProjectCardType";
import DashboardNavBar from "@/components/navigation/DashboardNavBar";
import DashboardStats from "@/components/DashboardStats";
import RecentAcitivityCard from "@/components/cards/RecentAcitivityCard";
import RecentActivityType from "@/lib/interfaces/RecentActivityType";

// Mock Data
const mockProjects: ProjectCardType[] = [
  {
    id: 1,
    name: "TeamFuse",
    role: "Leader",
    lastActive: "4h ago",
    tasksCompleted: 60,
    commits: 32,
    lastMessage: "2h ago",
    status: "active",
  },
  {
    id: 2,
    name: "AI Chat App",
    role: "Member",
    lastActive: "1d ago",
    tasksCompleted: 85,
    commits: 18,
    lastMessage: "5h ago",
    status: "active",
  },
  {
    id: 3,
    name: "E-commerce Platform",
    role: "Leader",
    lastActive: "3h ago",
    tasksCompleted: 45,
    commits: 24,
    lastMessage: "1h ago",
    status: "active",
  },
  {
    id: 4,
    name: "Mobile App Redesign",
    role: "Member",
    lastActive: "2d ago",
    tasksCompleted: 90,
    commits: 12,
    lastMessage: "1d ago",
    status: "completed",
  },
  {
    id: 5,
    name: "Analytics Dashboard",
    role: "Leader",
    lastActive: "6h ago",
    tasksCompleted: 35,
    commits: 28,
    lastMessage: "3h ago",
    status: "active",
  },
];

const recentActivity: RecentActivityType[] = [
  {
    id: 1,
    user: "Arjun",
    action: "pushed 3 commits to TeamFuse",
    time: "2h ago",
  },
  {
    id: 2,
    user: "Varsha",
    action: 'completed the task: "UI for task manager"',
    time: "4h ago",
  },
  {
    id: 3,
    user: "Ravi",
    action: 'commented: "We need to divide responsibilities"',
    time: "5h ago",
  },
  {
    id: 4,
    user: "Priya",
    action: "created a new pull request in AI Chat App",
    time: "6h ago",
  },
  {
    id: 5,
    user: "You",
    action: "merged PR #42 in E-commerce Platform",
    time: "8h ago",
  },
];

export default function TeamFuseDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navbar */}
      <DashboardNavBar />

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white border-r border-slate-200 p-6 min-h-[calc(100vh-73px)]">
          <div className="space-y-6">
            {/* Quick Stats */}
            <DashboardStats mockProjects={mockProjects} />

            {/* Recent Activity */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.slice(0, 5).map((activity) => (
                  <RecentAcitivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  My Projects
                </h1>
                <p className="text-slate-600 mt-1">
                  Manage and track all your team projects
                </p>
              </div>
              <Dialog
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
              >
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>
                      Set up a new project and invite your team members
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Project Name</Label>
                      <Input id="name" placeholder="Enter project name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your project"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="repo">
                        GitHub Repository URL (Optional)
                      </Label>
                      <Input
                        id="repo"
                        placeholder="https://github.com/username/repo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="members">Invite Team Members</Label>
                      <Input
                        id="members"
                        placeholder="Enter email or GitHub username"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsCreateModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => setIsCreateModalOpen(false)}
                    >
                      Create Project
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Filters and Search */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-600" />
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("active")}
                >
                  Active
                </Button>
                <Button
                  variant={filterStatus === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("completed")}
                >
                  Completed
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600">
                  No projects found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
