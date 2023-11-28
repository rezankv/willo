import { ReactNode } from "react";
import Context from "./context";
import usePersistState from "../../hooks/usePersistState";
import { TASKS_KEY } from "../../constants";
import { TaskModel } from "../../models";

interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = usePersistState<TaskModel[]>(
    JSON.stringify([]),
    TASKS_KEY
  );

  return (
    <Context.Provider value={{ setTasks, tasks }}>{children}</Context.Provider>
  );
};

export default TaskProvider;
