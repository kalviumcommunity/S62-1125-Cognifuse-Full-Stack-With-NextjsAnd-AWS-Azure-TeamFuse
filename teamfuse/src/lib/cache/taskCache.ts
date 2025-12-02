import { redis } from "@/lib/redis/connection";
import { projectTaskKey } from "./keys";
import { TTL } from "./policy";
import { TaskWithAssignee } from "../interfaces/TaskWithAssignee";

export async function getTasksFromCache(id: string) {
  const data = await redis.get(projectTaskKey(id));
  return data ? JSON.parse(data) : null;
}

export async function setTaskInCache(id: string, task: TaskWithAssignee[]) {
  await redis.set(projectTaskKey(id), JSON.stringify(task), "EX", TTL.FIVE_MIN);
}

export async function invalidateTaskCache(id: string) {
  await redis.del(projectTaskKey(id));
}
