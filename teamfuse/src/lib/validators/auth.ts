// src/lib/validators/auth.ts
import { z } from "zod";

export const oauthSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  avatar: z.string().url().optional(),
  oauthProvider: z.enum(["github", "google"]),
  oauthId: z.string().min(3),
});

export type OAuthInput = z.infer<typeof oauthSchema>;
