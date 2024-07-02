// ** icons
import { LogoIcon } from '@icons';

// ** components
import { Spinner } from '@components';

// ** locals
import { styles } from './_style';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage.loadingWrapper}>
      <LogoIcon className={styles.loadingPage.logoIcon} />
      <Spinner className={styles.loadingPage.spinner} />
    </div>
  );
};

export default LoadingPage;
