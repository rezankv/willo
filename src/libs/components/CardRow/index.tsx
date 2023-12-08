import { ReactNode } from "react";
import {} from '@assets/icons'
// ** components
import { Card } from "@components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const CardRow = ({ children, ...props }: Props) => {
  return (
    <Card
      className="flex h-14  w-full items-center    rounded-none border-x-0  px-3 py-1"
      {...props}
    >
      {children}
    </Card>
  );
};
