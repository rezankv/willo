import React from "react";
import CardRow from "../../../components/CardRow";
import Drag from "../../../assets/icons/drag.svg?react";
import { Checkbox } from "../../../components/UI/Checkbox";
import Badge from "../../../components/UI/Badge";
import { cn } from "../../../utils";
import { TaskModel } from "../../../models";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  task: TaskModel;
}
const TaskRow = ({ task, className = "", ...props }: Props) => {
  return (
    <CardRow
      className={cn(" flex h-14 justify-between transform hover:-translate-y-1 transition", className)}
      {...props}
    >
      <div className="flex">
        <Drag className="h-4 w-4   cursor-move" />
        <Checkbox className="" />
        <p className="text-sm font-light text-text">{task.getTitle()}</p>
      </div>
      <div className="flex gap-1">
        <Badge
          variant={"default"}
          className="bg-purple-light text-primary"
          text="sad"
        />
      </div>
    </CardRow>
  );
};

export default TaskRow;
