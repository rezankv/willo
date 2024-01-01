import { useState } from "react";

// ** hooks
import { useStorage } from "@hooks";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const { toggleTaskCompletion ,toggleTaskImportant} = useStorage();

  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const handleToggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);

  const handleToggleEditTaskDialogHandler = (state: boolean) =>
    setIsEditTaskDialogOpen(state);

  const handleToggleTaskCompletion = (task: TaskModel, isCompleted: boolean) =>
    toggleTaskCompletion(task.getId(), isCompleted);

  const handleToggleTaskImportant = (task: TaskModel, isImportant: boolean) =>
    toggleTaskImportant(task.getId(), isImportant);

  return {
    isDeleteTaskDialogOpen,
    isEditTaskDialogOpen,
    handleToggleTaskCompletion,
    handleToggleEditTaskDialogHandler,
    handleToggleDeleteTaskDialogHandler,
    handleToggleTaskImportant,
  };
};

export default useLogic;
