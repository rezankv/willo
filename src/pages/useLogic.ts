import { useState } from "react";
import { TaskModel } from "../models";

const useLogic = () => {
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(new TaskModel());


  console.log(selectedTask)
  return {
    isAddTaskDialogOpen,
    setIsAddTaskDialogOpen,
    isEditTaskDialogOpen,
    setIsEditTaskDialogOpen,
    selectedTask,
    setSelectedTask,
  };
};

export default useLogic;
