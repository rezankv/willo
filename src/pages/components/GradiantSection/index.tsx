import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  parentClassName?: string;
}
const GradientWrapper = ({ children, ...props }: Props) => (
  <div {...props} className={`relative py-28 ${props.className || ""}`}>
    <div
      className={`absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${
        props.parentClassName || ""
      }`}
      style={{
        background:
          "linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
