import { Controller } from "react-hook-form";
import { Button, Textarea } from "../../../../../components";
import Dialog from "../../../../../components/UI/Dialog";
import Input from "../../../../../components/UI/Input";
import useLogic from "./useLogic";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const CreateTaskDialog = ({ isOpen, onClose }: Props) => {
  const { control, handleSubmit, createTaskHandler, isValid } = useLogic();
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
            disabled={!isValid}
            onClick={handleSubmit(createTaskHandler)}
            variant={"default"}
          >
            Create
          </Button>
          <Button onClick={onClose} variant={"outline"}>
            Discard
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CreateTaskDialog;
