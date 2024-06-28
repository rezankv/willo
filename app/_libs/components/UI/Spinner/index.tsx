import { HTMLAttributes } from 'react';

// ** utils
import { string } from '@utils';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}
export const Spinner = ({ className = '', ...rest }: SpinnerProps) => {
  const { cn } = string;
  return (
    <div
      className={cn(
        className,
        'h-24 w-24 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent',
      )}
      {...rest}
    ></div>
  );
};
