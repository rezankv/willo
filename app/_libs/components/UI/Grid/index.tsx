import { HTMLAttributes, ReactNode } from 'react';

// ** utils
import { string } from '@utils';

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/* -------------------------------------------------------------------------- */
/*                          GridContainer                                     */
/* -------------------------------------------------------------------------- */
interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns?: Column;
  breakpoint?: Partial<Record<Breakpoint, Column>>;
}

export const GridContainer = ({
  children,
  className = '',
  columns,
  breakpoint = {},
  ...props
}: GridContainerProps) => {
  const { cn } = string;
  string
  return (
    <div
      className={cn(
        `grid grid-cols-${columns} `,
        (breakpoint.sm && `sm:grid-cols-${breakpoint.sm}`) || '',
        (breakpoint.md && `md:grid-cols-${breakpoint.md}`) || '',
        (breakpoint.lg && `lg:grid-cols-${breakpoint.lg}`) || '',
        (breakpoint.xl && `xl:grid-cols-${breakpoint.xl}`) || '',
        (breakpoint['2xl'] && `2xl:grid-cols-${breakpoint['2xl']}`) || '',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               GridItem                                     */
/* -------------------------------------------------------------------------- */
interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const GridItem = ({
  children,
  width = 12,
  className = '',
  ...props
}: GridItemProps) => {
  const { cn } = string;
  return (
    <div className={cn(`col-span-${width} `, className)} {...props}>
      {children}
    </div>
  );
};

// type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
// type BreakpointLabel = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
// //  {
// //   sm: 1,
// //   md: 2,
// //   lg: 10,
// //   xl: 8,
// //   '2xl': 9,
// // };
// interface GridProps {
//   columns: Column | Record<BreakpointLabel, Column>;
// }
// const Grid = ({ columns }: GridProps) => {
//   return <div className='grid sm'></div>
// };
