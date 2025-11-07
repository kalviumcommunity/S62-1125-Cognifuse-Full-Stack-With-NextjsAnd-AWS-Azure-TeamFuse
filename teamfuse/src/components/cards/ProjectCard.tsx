import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, GitCommit } from "lucide-react";
import ProjectCardType from "@/lib/interfaces/ProjectCardType";

interface ProjectCardProps {
  project: ProjectCardType;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.id}
      className="hover:shadow-lg transition-shadow cursor-pointer"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={project.role === "Leader" ? "default" : "secondary"}
              >
                {project.role}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.status}
              </Badge>
            </div>
          </div>
        </div>
        <CardDescription className="mt-2">
          Last active: {project.lastActive}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-slate-600">Tasks Completed</span>
              <span className="font-semibold text-slate-900">
                {project.tasksCompleted}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${project.tasksCompleted}%` }}
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5">
              <GitCommit className="h-4 w-4 text-slate-500" />
              <span className="text-slate-600">{project.commits} commits</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4 text-slate-500" />
              <span className="text-slate-600">{project.lastMessage}</span>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            Open Project
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
