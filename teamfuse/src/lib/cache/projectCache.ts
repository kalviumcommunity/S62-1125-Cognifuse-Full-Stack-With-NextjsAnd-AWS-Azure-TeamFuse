import { redis } from "@/lib/redis/connection";
import { projectKey } from "./keys";
import { TTL } from "./policy";
import { ProjectDashboardResponse } from "../interfaces/projectDashboardResponse";

export async function getProjectFromCache(id: string) {
  const data = await redis.get(projectKey(id));
  return data ? JSON.parse(data) : null;
}

export async function setProjectInCache(
  id: string,
  project: ProjectDashboardResponse
) {
  await redis.set(projectKey(id), JSON.stringify(project), "EX", TTL.FIVE_MIN);
}

export async function invalidateProjectCache(id: string) {
  await redis.del(projectKey(id));
}
