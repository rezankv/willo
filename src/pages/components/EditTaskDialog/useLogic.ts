import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { UpdateTaskSchema, updateTaskSchema } from "../../../validations";
import useTask from "../../../hooks/useTask";
import { useEffect, useState } from "react";
import { Props } from ".";

interface IUseLogic {
  task: Props["task"];
}
const useLogic = ({ task }: IUseLogic) => {
  const { updateTask } = useTask();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<UpdateTaskSchema>({
    mode: "onChange",
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [isDeleteTaskDialogOpen, setIsDeleteTaskDialogOpen] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const updateTaskHandler = (taskId: string) => (data: UpdateTaskSchema) => {
    updateTask(taskId, data);
    reset();
    toast.success("Task Updated!");
  };

  const toggleDeleteTaskDialogHandler = (state: boolean) =>
    setIsDeleteTaskDialogOpen(state);

  /* -------------------------------------------------------------------------- */
  /*                              SideEffects                                      */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    reset({
      title: task.getTitle(),
      description: task.getDescription(),
      isCompleted: task.getIsCompleted(),
      isImportant: task.getIsImportant(),
      isDeleted: task.getIsDeleted(),
    });
  }, []);

  return {
    getValues,
    handleSubmit,
    control,
    isValid,
    updateTaskHandler,
    isDirty,
    toggleDeleteTaskDialogHandler,
    isDeleteTaskDialogOpen,
  };
};

export default useLogic;
