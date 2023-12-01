import { useForm } from "react-hook-form";
import { CreateTaskSchema, createTaskSchema } from "../../../../../validations";
import { zodResolver } from "@hookform/resolvers/zod";
import useTask from "../../../../../hooks/useTask";
import { TaskModel } from "../../../../../models";

const useLogic = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateTaskSchema>({
    mode: "onChange",
    resolver: zodResolver(createTaskSchema),
    defaultValues: {},
  });

  const { createTask } = useTask();

  const createTaskHandler = (data: CreateTaskSchema) =>
    createTask(new TaskModel(data));

  console.log(watch());
  console.log(errors);
  return { handleSubmit, control, isValid, createTaskHandler };
};

export default useLogic;
