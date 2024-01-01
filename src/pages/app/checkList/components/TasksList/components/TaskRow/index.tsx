import React from "react";

// ** assets
import Drag from "@assets/icons/drag.svg?react";

// ** components
import { Badge, Checkbox, CardRow } from "@components";

// ** utils
import { cn } from "@utils";

// ** models
import { TaskModel } from "@models";

// ** assets
import { StarIcon, TrashIcon } from "@assets/icons";

// ** locals
import useLogic from "./useLogic";
import DeleteTaskDialog from "./components/DeleteTaskDialog";
import EditTaskDialog from "./components/EditTaskDialog";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  task: TaskModel;
}
const TaskRow = ({
  task,
  className = "",
  onClick = () => undefined,
  ...props
}: Props) => {
  const {
    handleToggleDeleteTaskDialogHandler,
    isDeleteTaskDialogOpen,
    isEditTaskDialogOpen,
    handleToggleEditTaskDialogHandler,
    handleToggleTaskCompletion,
    handleToggleTaskImportant,
  } = useLogic();

  return (
    <>
      <CardRow
        className={cn(
          "hover: group flex  h-14 transform items-center justify-between border-b-0 border-l-0 border-r-0 px-3 shadow-none transition first:border-t-0 hover:-translate-y-1  hover:shadow ",
          className,
        )}
        onClick={(e) => {
          handleToggleEditTaskDialogHandler(true);
          onClick(e);
        }}
        {...props}
      >
        <div className="flex gap-2">
          <Drag className="h-4 w-4  cursor-move fill-text-mutated  group-hover:opacity-100 lg:opacity-0" />
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
            }}
            onCheckedChange={(checked: boolean) =>
              handleToggleTaskCompletion(task, checked)
            }
            checked={task.getIsCompleted()}
          />
          <p
            className={cn(
              "text-sm font-light text-text",
              task.getIsCompleted() ? "text-text-mutated line-through" : "",
            )}
          >
            {task.getTitle()}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <TrashIcon
            className="  h-4 w-4 cursor-pointer hover:text-error group-hover:opacity-100 lg:opacity-0"
            onClick={(e) => {
              e.stopPropagation();
              handleToggleDeleteTaskDialogHandler(true);
            }}
          />
          <StarIcon
            className={cn(
              "h-4 w-4 cursor-pointer hover:text-yellow-500 group-hover:opacity-100 lg:opacity-0",
              task.getIsImportant()
                ? "fill-yellow-500 text-yellow-500 lg:opacity-100"
                : "",
            )}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleTaskImportant(task, !task.getIsImportant());
            }}
          />
          <Badge
            variant={"default"}
            className="bg-purple-light text-primary"
            text="sad"
          />
        </div>
      </CardRow>
      <DeleteTaskDialog
        isOpen={isDeleteTaskDialogOpen}
        onClose={() => handleToggleDeleteTaskDialogHandler(false)}
        task={task}
      />
      <EditTaskDialog
        isOpen={isEditTaskDialogOpen}
        onClose={() => handleToggleEditTaskDialogHandler(false)}
        task={task}
      />
    </>
  );
};

export default TaskRow;
