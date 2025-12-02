// src/lib/cache/keys.ts

export const userKey = (id: string) => `app:user:${id}`;
export const userReposKey = (id: string) => `app:user:${id}:repos`;

export const projectKey = (id: string) => `app:project:${id}`;
export const projectStatsKey = (id: string) => `app:project:${id}:stats`;
export const projectTaskKey = (id: string) => `app:project:${id}:task`;
export const projectMemberKey = (id: string) => `app:project:${id}:members`;
export const projectFeedbackKey = (id: string) => `app:project:${id}:feedback`;
