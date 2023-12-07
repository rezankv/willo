import toast from "react-hot-toast";
import { TaskModel } from "../../../../../models";
import { useStorage } from "../../../../../hooks";

const useLogic = () => {
  const { deleteTask } = useStorage();

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const deleteTaskHandler = (task: TaskModel) => {
    deleteTask(task.getId());
    toast.success("Task deleted Successfully!");
  };

  return { deleteTaskHandler };
};

export default useLogic;
