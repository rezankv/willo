import { useState } from "react";

// ** hooks
import { useStorage } from "@hooks";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const { completeTask } = useStorage();

  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);

  const toggleEditTaskDialogHandler = (state: boolean) =>
    setIsEditTaskDialogOpen(state);

  const handleCompleteTask = (task: TaskModel) => completeTask(task.getId());

  return {
    isDeleteTaskDialogOpen,
    isEditTaskDialogOpen,
    toggleDeleteTaskDialogHandler,
    toggleEditTaskDialogHandler,
    handleCompleteTask,
  };
};

export default useLogic;
