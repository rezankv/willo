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
      className={cn(
        "group flex  h-14 transform items-center justify-between px-3 transition hover:-translate-y-1 hover:" ,
        className,
      )}
      {...props}
    >
      <div className="flex gap-2">
        <Drag className="group-hover:opacity-100 opacity-0  h-4 w-4 cursor-move fill-text-mutated" />
        <Checkbox />
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
