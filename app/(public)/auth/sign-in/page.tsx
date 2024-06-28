import { Metadata } from 'next';

// ** components
import { Container } from '@components';

// ** constants
import { info } from '@constants';

// ** locals
import SignInForm from './_components/SignInForm';
import style from './_style';

export const metadata: Metadata = {
  title: `${info.projectName} | sign in`,
};

const SignInPage = () => {
  return (
    <Container className={style.container}>
      <section className={style.section}>
        <SignInForm className={style.signInForm} />
      </section>
    </Container>
  );
};

export default SignInPage;
