import React from "react";
import CardRow from "../../../components/CardRow";
import Drag from "../../../assets/icons/drag.svg?react";
import { Checkbox } from "../../../components/UI/Checkbox";
import Badge from "../../../components/UI/Badge";
import { cn } from "../../../utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}
const TaskRow = ({ text, className = "", ...props }: Props) => {
  return (
    <CardRow className={cn("  flex justify-between ", className)} {...props}>
      <div className="flex">
        <Drag className="w-4 h-4   cursor-move" />
        <Checkbox className="" />
        <p className="text-sm font-light text-text">{text}</p>
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
