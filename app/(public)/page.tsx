import Link from 'next/link';

// ** components
import { Button, Typography, Navbar, Container } from '@components';

// ** icons
import { ChevronRightIcon, GithubIcon } from '@icons';

// ** constants
import { info, routes } from '@constants';

// ** locals
import GradientWrapper from './_components/GradientWrapper';
import { styles } from './_style';

const LandingPage = () => (
  <section>
    <GradientWrapper>
      <div className={styles.content}>
        <Typography
          responsiveVariant={{
            md: 'md:title-4xl',
          }}
          variant="title-2xl"
        >
          The Fastest Way To Manage Your {''}
          <Typography className={styles.gradientText}>
            Temporary Tasks
          </Typography>
        </Typography>
        <Typography className={styles.description} variant="description" as="p">
          The ultimate way to manage tasks efficiently and grow your
          productivity for free!
        </Typography>
        <div className={styles.actionsWrapper}>
          <Link href={routes.SIGN_IN_PAGE_ROUTE}>
            <Button variant="default" className={styles.startBtn}>
              Start your journey
              <ChevronRightIcon />
            </Button>
          </Link>
          <Link href={info.repository_url} target="_blank">
            <Button variant="outline" className={styles.discoverBtn}>
              Discover on github
              <GithubIcon />
            </Button>
          </Link>
        </div>
      </div>
    </GradientWrapper>
  </section>
);

export default LandingPage;
