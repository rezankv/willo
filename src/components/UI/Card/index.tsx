import React from "react";
import { cn } from "../../../utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isFullWidth?: boolean;
}
const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ className = "", children, isFullWidth = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        " rounded-xl border bg-background-paper text-text-mutated shadow",
        isFullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

export default Card;
