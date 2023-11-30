import { ReactNode } from "react";
import Card from "../UI/Card";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const CardRow = ({ children, ...props }: Props) => {
  return (
    <Card
      isFullWidth
      className="h-14 px-3  flex w-full  justify-between  border-x-0 !rounded-none  py-1 items-center"
      {...props}
    >
      {children}
    </Card>
  );
};

export default CardRow;
