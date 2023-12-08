import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

// ** validations
import { CreateTaskSchema, createTaskSchema } from "@validations";

// ** hooks
import { useStorage } from "@hooks";

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

  const { createTask } = useStorage();

  const createTaskHandler = (data: CreateTaskSchema) => {
    createTask(data)
    reset();
    toast.success("Task Added!");
  };

  return { handleSubmit, control, isValid, createTaskHandler,isDirty };
};

export default useLogic;
