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
      className={cn(" h-14 flex justify-between ", className)}
      {...props}
    >
      <div className="flex">
        <Drag className="w-4 h-4   cursor-move" />
        <Checkbox className="" />
        <p className="text-sm font-light text-text">{task.getTitle()}</p>
      </div>
      <div className="flex gap-1">
        <Badge
          variant={"default"}
          className="text-primary bg-purple-light"
          text="sad"
        />
      </div>
    </CardRow>
  );
};

export default TaskRow;
