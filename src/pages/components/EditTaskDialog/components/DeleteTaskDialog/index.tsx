import useLogic from "./useLogic";
import Dialog from "../../../../../components/UI/Dialog";
import { TaskModel } from "../../../../../models";
import { Button } from "../../../../../components";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  task: TaskModel;
}
const DeleteTaskDialog = ({ task, isOpen, onClose,onDelete }: Props) => {
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
              onDelete()
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
