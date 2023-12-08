import React from "react";

// ** utils
import { cn } from "@utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border bg-background-paper text-text-mutated shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

