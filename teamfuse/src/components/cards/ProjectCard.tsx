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
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectCardType;
}

// this is a change
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.id}
      className="
        cursor-pointer 
        transition-all 
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        hover:bg-white/10 
        rounded-2xl 
        shadow-lg shadow-black/30
      "
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
              {project.name}
            </CardTitle>
            {project.description && (
              <CardDescription className="text-gray-400 mt-1">
                {project.description}
              </CardDescription>
            )}

            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant="outline"
                className="
                  text-xs 
                  px-2 
                  py-1
                  border-indigo-400/40 
                  text-indigo-300 
                  bg-indigo-500/10 
                "
              >
                {project.role}
              </Badge>

              <Badge
                variant="outline"
                className="
                  text-xs 
                  px-2 
                  py-1
                  border-purple-400/40 
                  text-purple-300 
                  bg-purple-500/10
                "
              >
                {project.status}
              </Badge>
            </div>
            {project.createdAt && (
              <CardDescription className="mt-1 text-gray-400 text-sm">
                Created on: {new Date(project.createdAt).toLocaleDateString()}
              </CardDescription>
            )}
          </div>
        </div>

        <CardDescription className="mt-2 text-gray-400 text-sm">
          Last active:{" "}
          {project.lastActive ? project.lastActive.toLocaleString() : "N/A"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Progress Bar */}
          {/* <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Tasks Completed</span>
              <span className="font-semibold text-indigo-300">
                {project.tasksCompleted}%
              </span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="
                  h-2 
                  rounded-full 
                  bg-gradient-to-r 
                  from-indigo-400 
                  via-purple-400 
                  to-pink-400
                "
                style={{ width: `${project.tasksCompleted}%` }}
              />
            </div>
          </div> */}

          {/* Stats Row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 text-gray-400">
              <GitCommit className="h-4 w-4 text-indigo-300" />
              <span>{project.commits || 0} commits</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <MessageSquare className="h-4 w-4 text-purple-300" />
              <span>{project.totalMessages || 0}</span>
            </div>
          </div>

          <Link href={`/project/${project.id}`}>
            <Button
              className="
              w-full 
              bg-linear-to-r 
              from-indigo-500 
              to-purple-600 
              hover:from-indigo-400 
              hover:to-purple-500
              text-white 
              shadow-md 
              shadow-indigo-500/20
            "
            >
              Open Project
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
