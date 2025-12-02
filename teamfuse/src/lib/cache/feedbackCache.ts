import { redis } from "@/lib/redis/connection";
import { projectFeedbackKey } from "./keys";
import { TTL } from "./policy";
import { FeedbackWithUsers } from "../interfaces/feedback";

export async function getFeedbackFromCache(id: string) {
  const data = await redis.get(projectFeedbackKey(id));
  return data ? JSON.parse(data) : null;
}

export async function setFeedbackInCache(
  id: string,
  project: FeedbackWithUsers[]
) {
  await redis.set(
    projectFeedbackKey(id),
    JSON.stringify(project),
    "EX",
    TTL.FIVE_MIN
  );
}

export async function invalidateFeedbackCache(id: string) {
  await redis.del(projectFeedbackKey(id));
}
