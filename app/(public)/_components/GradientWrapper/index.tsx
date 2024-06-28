import { HTMLAttributes, ReactNode } from 'react';

// ** utils
import { string } from '@utils';

// ** locals
import { styles } from './style';

interface gradientWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const GradientWrapper = ({
  children,
  className = '',
  ...props
}: gradientWrapperProps) => (
  <div className={string.cn(styles.wrapper, className)} {...props}>
    <div className={styles.backgroundGradient}></div>
    <div className={styles.childrenWrapper}>{children}</div>
  </div>
);

export default GradientWrapper;
