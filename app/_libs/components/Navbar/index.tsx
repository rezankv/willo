import Link from 'next/link';

// ** icons
import { LogoIcon, GithubIcon } from '@icons';

// ** constants
import { info, routes } from '@constants';

// ** components
import { Typography } from '@components';

// ** locals
import { style } from './style';

export const Navbar = () => {
  return (
    <nav className={style.header}>
      <Link href={routes.LANDING_PAGE} className={style.logo_wrapper}>
        <LogoIcon className={style.logo_icon} />
        <Typography
          variant="label-md"
          responsiveVariant={{
            lg: 'lg:label-xl',
          }}
        >
          Willo
        </Typography>
      </Link>
      <Link href={info.repository_url} target="_blank">
        <GithubIcon className={style.github_icon} />
      </Link>
    </nav>
  );
};
