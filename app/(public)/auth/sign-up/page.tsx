import { Metadata } from 'next';

// ** components
import { Container } from '@components';

// ** constants
import { info} from '@constants';

// ** locals
import SignUpForm from './_components/SignUpForm';
import style from './_style';

export const metadata: Metadata = {
  title: `${info.projectName} | sign up`,
};
const SignUpPage = () => {
  return (
    <Container className={style.container}>
      <section className={style.section}>
        <SignUpForm className={style.signInForm} />
      </section>
    </Container>
  );
};

export default SignUpPage;
