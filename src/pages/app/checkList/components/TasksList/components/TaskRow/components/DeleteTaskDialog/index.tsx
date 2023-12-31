// ** components
import { Button, Dialog } from "@components";

// ** models
import { TaskModel } from "@models";

// ** locals
import useLogic from "./useLogic";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  task: TaskModel;
}
const DeleteTaskDialog = ({ task, isOpen, onClose }: Props) => {
  const { deleteTaskHandler } = useLogic();

  return (
    <Dialog
      open={isOpen}
      title={`Are you sure you want to delete (${task.getTitle()}) Task?`}
      description="Clean up the space!"
      onClose={() => onClose()}
    >
      <form className="flex flex-col gap-4">
        <div className="flex gap-1">
          <Button
            type="submit"
            onClick={() => {
              deleteTaskHandler(task);
              onClose();
            }}
            variant={"destructive"}
          >
            Delete
          </Button>
          <Button onClick={onClose} variant={"outline"}>
            Close
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default DeleteTaskDialog;
