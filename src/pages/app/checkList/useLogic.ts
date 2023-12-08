import { useState } from "react";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTask, setSelectedTask] = useState(new TaskModel());

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDialog = (state: boolean) => setIsEditTaskDialogOpen(state);

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    isEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
    toggleDialog,
  };
};

export default useLogic;
