import { useForm } from "react-hook-form";
import { CreateTaskSchema, createTaskSchema } from "../../../../../validations";
import { zodResolver } from "@hookform/resolvers/zod";
import useTask from "../../../../../hooks/useTask";
import toast from "react-hot-toast";

const useLogic = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, isValid },
  } = useForm<CreateTaskSchema>({
    mode: "onChange",
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { createTask } = useTask();

  const createTaskHandler = (data: CreateTaskSchema) => {
    createTask(data);
    reset();
    toast.success("Task Added!");
  };

  return { handleSubmit, control, isValid, createTaskHandler,isDirty };
};

export default useLogic;
