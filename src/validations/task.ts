import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const createTaskSchema = z.object({
  id: z
    .string({ required_error: "id must be string" })
    // .min(1, "title is required")
    .uuid("id must be uuid")
    .optional()
    .default(uuidv4()),
  title: z
    .string({ required_error: "title is required" })
    .min(1, "title is required"),
  description: z
    .string()
    .max(254, "description can't be more than 254 characters"),
  isCompleted: z.boolean().optional().default(false),
  isImportant: z.boolean().optional().default(false),
  isDeleted: z.boolean().optional().default(false),
});
export const updateTaskSchema = z.object({
  taskId: z
    .string({ required_error: "id is required" })
    .min(1, "title is required")
    .uuid("id must be uuid"),
  data: z.object(createTaskSchema.shape).partial(),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
