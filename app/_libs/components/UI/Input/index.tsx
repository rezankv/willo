import  React from 'react';

// ** utils
import { string } from '@utils';

// ** locals
import { style } from './style';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className='', type, ...props }, ref) => {
    const { cn } = string;
    return (
      <input
        type={type}
        className={cn(
          style.input,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
