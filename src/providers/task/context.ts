import { createContext, Dispatch, SetStateAction } from "react";
import { TaskModel } from "../../models";

export default createContext<{
  tasks: TaskModel[];
  setTasks: Dispatch<SetStateAction<TaskModel[]>>;
  createTask: (task: TaskModel) => void;
  updateTask: (taskId: string, data: TaskModel) => void;
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
