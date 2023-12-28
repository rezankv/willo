import { useState } from "react";

const useLogic = () => {
  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);

  const toggleEditTaskDialogHandler = (state: boolean) =>
    setIsEditTaskDialogOpen(state);

  return {
    isDeleteTaskDialogOpen,
    isEditTaskDialogOpen,
    toggleDeleteTaskDialogHandler,
    toggleEditTaskDialogHandler,
  };
};

export default useLogic;
