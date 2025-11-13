import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3, "Project name must be at least 3 characters."),

  description: z.string().optional(),

  githubRepo: z
    .string()
    .url("GitHub repo URL is required.")
    .regex(
      /^https:\/\/github\.com\/[^\/]+\/[^\/]+$/,
      "Invalid GitHub repository URL."
    ),

  members: z
    .array(z.string())
    .optional()
    .superRefine((value, ctx) => {
      if (value !== undefined && !Array.isArray(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Members must be an array of strings.",
        });
      }
    }),
});

export type ProjectInput = z.infer<typeof projectSchema>;
