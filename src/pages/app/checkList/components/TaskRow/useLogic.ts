import { useState } from "react";

const useLogic = () => {
  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const toggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);
    
  return {
    isDeleteTaskDialogOpen,
    toggleDeleteTaskDialogHandler,
  };
};

export default useLogic;
