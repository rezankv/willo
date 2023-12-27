import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useEffect } from "react";
import toast from "react-hot-toast";

// ** validations
import { UpdateTaskSchema, updateTaskSchema } from "@validations";

// ** hooks
import { useStorage } from "@hooks";

// ** locals
import { Props } from ".";

interface IUseLogic {
  task: Props["task"];
}
const useLogic = ({ task }: IUseLogic) => {

const {updateTask} = useStorage()

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


  /* -------------------------------------------------------------------------- */
  /*                              Handlers                                      */
  /* -------------------------------------------------------------------------- */

  const updateTaskHandler = (taskId: string) => (data: UpdateTaskSchema) => {
    updateTask(taskId, data);
    reset();
    toast.success("Task Updated!");
  };


  const initializeFormHandler = () =>
    reset({
      title: task.getTitle(),
      description: task.getDescription(),
      isCompleted: task.getIsCompleted(),
      isImportant: task.getIsImportant(),
      isDeleted: task.getIsDeleted(),
    });

  /* -------------------------------------------------------------------------- */
  /*                              SideEffects                                      */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    initializeFormHandler();
  }, [task.getId()]);

  return {
    getValues,
    handleSubmit,
    control,
    isValid,
    updateTaskHandler,
    isDirty,
  };
};

export default useLogic;
