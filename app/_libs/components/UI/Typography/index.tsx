import {
  ComponentPropsWithoutRef,
  LegacyRef,
  forwardRef,
  createElement,
} from 'react';
import tailwindConfig from 'tailwindcss/defaultTheme';

// ** utils
import { string } from '@utils';

type Breakpoint = keyof typeof tailwindConfig.screens;

const typographyVariants = {
  'title-4xl': 'title-4xl' as const,
  'title-2xl': 'title-2xl' as const,
  'label-xl': 'label-xl' as const,
  'label-xl-bold': 'label-xl-bold' as const,
  description: 'description' as const,
  'description-sm': 'description-sm' as const,
  'label-md': 'label-md' as const,
};

const generateResponsiveClasses = (
  variants: TypographyProps['responsiveVariant'] = {},
) => string.cn(...Object.values(variants));

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type AddBreakpointPrefix<T extends string, P extends string> = `${P}:${T}`;

type TypographyProps<T extends TypographyElement = 'span'> = {
  variant?: keyof typeof typographyVariants;
  responsiveVariant?: {
    [key in Breakpoint]?: AddBreakpointPrefix<
      keyof typeof typographyVariants,
      Breakpoint
    >;
  };
  as?: T;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Typography = forwardRef(
  <T extends TypographyElement = 'span'>(
    {
      children,
      as,
      variant,
      responsiveVariant = {},
      className = '',
      ...props
    }: TypographyProps<T>,
    ref: LegacyRef<HTMLElement>,
  ) => {
    const tag = as || 'span';
    return createElement(
      tag,
      {
        ref,
        className: string.cn(
          variant || '',
          generateResponsiveClasses(responsiveVariant),
          className,
        ),
        ...props,
      },
      children,
    );
  },
);

Typography.displayName = 'Typography';
