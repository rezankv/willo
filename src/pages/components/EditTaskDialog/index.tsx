import { Controller } from "react-hook-form";
import useLogic from "./useLogic";
import Dialog from "../../../components/UI/Dialog";
import { TaskModel } from "../../../models";
import Input from "../../../components/UI/Input";
import { Button, Textarea } from "../../../components";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  task: TaskModel;
}
const EditTaskDialog = ({ task, isOpen, onClose }: Props) => {
  const { control, handleSubmit, isDirty, updateTaskHandler, isValid } =
    useLogic({ task });


    console.log(task)
  return (
    <Dialog
      open={isOpen}
      title={`Edit (${task.getTitle()}) Task`}
      description="Make this task much better!"
      onClose={() => onClose()}
    >
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Controller
            name={"title"}
            control={control}
            render={({ field }) => <Input {...field} label="Title" />}
          />
          <Controller
            name={"description"}
            control={control}
            render={({ field }) => <Textarea {...field} label="Description" />}
          />
        </div>
        <div className="flex gap-1">
          <Button
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit(updateTaskHandler(task.getId()))}
            variant={"default"}
          >
            Update
          </Button>
          <Button onClick={onClose} variant={"outline"}>
            {isDirty ? "Discard" : "Close"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default EditTaskDialog;
