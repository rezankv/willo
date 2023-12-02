import { createContext, Dispatch, SetStateAction } from "react";
import { TaskModel } from "../../models";
import { CreateTaskSchema, UpdateTaskSchema } from "../../validations";

export default createContext<{
  tasks: TaskModel[];
  setTasks: Dispatch<SetStateAction<TaskModel[]>>;
  createTask: (task: CreateTaskSchema) => void;
  updateTask: (taskId: string, data: UpdateTaskSchema) => void;
  deleteTask: (taskId: string) => void;
  getTaskById: (taskId: string) => TaskModel;
}>({
  tasks: [],
  setTasks: () => undefined,
  createTask: () => undefined,
  updateTask: () => undefined,
  deleteTask: () => undefined,
  getTaskById: () => new TaskModel(),
});
