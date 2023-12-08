import { Controller } from "react-hook-form";

// ** components
import { Button, Textarea, Dialog, Input } from "@components";

// ** locals
import useLogic from "./useLogic";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const CreateTaskDialog = ({ isOpen, onClose }: Props) => {
  const { control, handleSubmit, isDirty, createTaskHandler, isValid } =
    useLogic();
  return (
    <Dialog
      open={isOpen}
      title="Add Task"
      description="start a new journey!"
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
            onClick={handleSubmit(createTaskHandler)}
            variant={"default"}
          >
            Create
          </Button>
          <Button onClick={onClose} variant={"outline"}>
            {isDirty ? "Discard" : "Close"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CreateTaskDialog;
