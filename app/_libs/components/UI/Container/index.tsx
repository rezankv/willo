import { HTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

// ** utils
import { string } from '@utils';

const containerVariants = cva('container px-5 sm:px-10', {
  variants: {},
  defaultVariants: {},
});

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: ReactNode;
}

export const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => {
  const { cn } = string;
  return (
    <div className={cn(containerVariants({ className }))} {...props}>
      {children}
    </div>
  );
};
