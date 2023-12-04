import { ReactNode } from "react";
import Context from "./context";
// import usePersistState from "../../hooks/usePersistState";
// import { TASKS_KEY } from "../../constants";
import { TaskModel } from "../../models";
import usePersistState from "../../hooks/usePersistState";
import { TASKS_KEY } from "../../constants";
import { CreateTaskSchema, UpdateTaskSchema } from "../../validations";

interface Props {
  children: ReactNode;
}

// TODO  i thing the crud functions is not optimize
const TaskProvider = ({ children }: Props) => {
  // ** the data comes from local storage is not type of task
  const [tasks, setTasks] = usePersistState<TaskModel[]>([], TASKS_KEY);
  // const [tasks, setTasks] = useState<TaskModel[]>([]);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const getTaskById = (taskId: string) =>
    taskModels.find((task) => task.getId() === taskId) || new TaskModel();

  const createTask = (task: CreateTaskSchema) =>
    setTasks((prevState) => [...prevState, new TaskModel(task)]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateTask = (taskId: string, { id, ...rest }: UpdateTaskSchema) =>
    setTasks((prevState) =>
      prevState.map((task) =>
        task.getId() === taskId
          ? new TaskModel({ ...task, ...rest, id: taskId })
          : task,
      ),
    );

  const deleteTask = (taskId: string) => {
    const newTasks = taskModels.filter((task) => task.getId() !== taskId);
    setTasks(newTasks);
  };

  /* -------------------------------------------------------------------------- */
  /*                              Data                                          */
  /* -------------------------------------------------------------------------- */

  // ** The data comes from local storage is not instance of TaskModel class so i create new TaskModels here
  const taskModels = tasks.map((task) => new TaskModel(task.props));

  return (
    <Context.Provider
      value={{
        setTasks,
        tasks: taskModels,
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
