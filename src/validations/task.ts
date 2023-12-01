import { z } from "zod";

export const createTaskSchema = z.object({
  id: z
    .string({ required_error: "id is required" })
    .min(1, "title is required")
    .uuid("id must be uuid"),
  title: z
    .string({ required_error: "title is required" })
    .min(1, "title is required"),
  description: z
    .string()
    .max(254, "description can't be more than 254 characters"),
  isCompleted: z.boolean().default(false).optional(),
  isImportant: z.boolean().default(false).optional(),
  isDeleted: z.boolean().default(false).optional(),
});
export const updateTaskSchema = z.object({
  taskId: z
    .string({ required_error: "id is required" })
    .min(1, "title is required")
    .uuid("id must be uuid"),
  data: z.object(createTaskSchema.shape).partial(),
});

export type createTaskSchema = z.infer<typeof createTaskSchema>;
export type updateTaskSchema = z.infer<typeof updateTaskSchema>;
