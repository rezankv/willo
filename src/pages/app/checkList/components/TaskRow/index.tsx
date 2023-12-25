import React from "react";

// ** assets
import Drag from "@assets/icons/drag.svg?react";

// ** components
import { Badge, Checkbox, CardRow } from "@components";

// ** utils
import { cn } from "@utils";

// ** models
import { TaskModel } from "@models";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  task: TaskModel;
}
const TaskRow = ({ task, className = "", ...props }: Props) => {
  return (
    <CardRow
      className={cn(
        "hover: group  flex h-14 transform items-center justify-between px-3 transition hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      <div className="flex gap-2">
        <Drag className="h-4 w-4  cursor-move fill-text-mutated  group-hover:opacity-100 lg:opacity-0" />
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
