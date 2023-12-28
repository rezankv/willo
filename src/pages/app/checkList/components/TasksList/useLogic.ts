import { useState } from "react";

// ** models
import { TaskModel } from "@models";

const useLogic = () => {
  const [selectedTask, setSelectedTask] = useState(new TaskModel());
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDialog = (state: boolean) => setIsEditTaskDialogOpen(state);

  return { selectedTask, setSelectedTask, toggleDialog, isEditTaskDialogOpen };
};

export default useLogic;
