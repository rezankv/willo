import { useState } from "react";

// ** hooks
import { useStorage } from "@hooks";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const { toggleTaskCompletion } = useStorage();

  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);

  const toggleEditTaskDialogHandler = (state: boolean) =>
    setIsEditTaskDialogOpen(state);

  const handleToggleTaskCompletion = (task: TaskModel, isCompleted: boolean) =>
    toggleTaskCompletion(task.getId(), isCompleted);

  return {
    isDeleteTaskDialogOpen,
    isEditTaskDialogOpen,
    toggleDeleteTaskDialogHandler,
    toggleEditTaskDialogHandler,
    handleToggleTaskCompletion,
  };
};

export default useLogic;
