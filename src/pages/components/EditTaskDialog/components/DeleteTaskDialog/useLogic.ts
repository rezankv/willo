import toast from "react-hot-toast";
import useTask from "../../../../../hooks/useTask";
import { TaskModel } from "../../../../../models";

const useLogic = () => {
  const { deleteTask } = useTask();
  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const deleteTaskHandler = (task: TaskModel) => {
    deleteTask(task.getId())
    toast.success('Task deleted Successfully!')

  }

  return { deleteTaskHandler };
};

export default useLogic;
