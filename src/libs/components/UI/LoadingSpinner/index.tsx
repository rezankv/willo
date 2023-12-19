import { HTMLAttributes } from "react";

// ** utils
import { cn } from "@utils";

interface Props extends HTMLAttributes<HTMLDivElement> {}
export const LoadingSpinner = ({ className = "", ...rest }: Props) => {
  return (
    <div
      className={cn(
        className,
        "h-24 w-24 animate-spin  rounded-full border-4 border-solid border-primary border-t-transparent",
      )}
      {...rest}
    ></div>
  );
};
