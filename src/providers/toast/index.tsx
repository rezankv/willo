import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}
const ToastProvider = ({ children }: Props) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default ToastProvider;
