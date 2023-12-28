import { useState } from "react";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTask, setSelectedTask] = useState(new TaskModel());
  const [searchedValue, setSearchedValue] = useState("");

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
    searchedValue,
    setSearchedValue,
  };
};

export default useLogic;
