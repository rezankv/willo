import { useState } from "react";

const useLogic = () => {
  const [isCreateTaskDialogOpen, setIsCreateTaskDialogOpen] = useState(false);

  const toggleDialog = (state: boolean) => setIsCreateTaskDialogOpen(state);
  return { isCreateTaskDialogOpen, toggleDialog };
};

export default useLogic;
