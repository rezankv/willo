import { createContext, Dispatch, SetStateAction } from "react";
import {  TaskModel } from "../../models";

export default createContext<{
  tasks: TaskModel[];
  setTasks: Dispatch<SetStateAction<TaskModel[]>>;
}>({
  tasks: [],
  setTasks: () => undefined,
});
