import { ReactNode } from "react";

// ** utils
import { cn } from "@utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isShow?: boolean;
}
export const BackDrop = ({
  children,
  isShow = true,
  className = "",
  ...rest
}: Props) => (
  <>
    <div
      className={cn(
        `" bg-background/80 fixed inset-0 h-screen   w-screen z-sidebar-backDrop " backdrop-blur-sm`,
        !isShow ? "hidden" : "",
        className,
      )}
      {...rest}
    ></div>
    {children}
  </>
);
