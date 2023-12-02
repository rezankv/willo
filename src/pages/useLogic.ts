import { useState } from "react";
import { TaskModel } from "../models";

const useLogic = () => {
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(new TaskModel());

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDialog = (state: boolean) => setIsEditTaskDialogOpen(state);

  return {
    isEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
    toggleDialog,
  };
};

export default useLogic;
