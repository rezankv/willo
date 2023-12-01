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

  const getTaskById = (taskId: string) =>
    tasks.find((task) => task.getId() === taskId) || new TaskModel();

  const createTask = (task: TaskModel) =>
    setTasks((prevState) => ({ ...prevState, task }));

  const updateTask = (taskId: string, data: TaskModel) => {
    const selectedTask = getTaskById(taskId);
    const updatedTask = { ...selectedTask, ...data };
    setTasks((prevState) => ({ ...prevState, updatedTask }));
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevState) => ({
      ...prevState,
      ...tasks.filter((task) => task.getId() !== taskId),
    }));
  };

  return (
    <Context.Provider
      value={{
        setTasks,
        tasks,
        createTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TaskProvider;
