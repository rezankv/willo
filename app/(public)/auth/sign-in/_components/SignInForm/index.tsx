import Link from 'next/link';

// ** components
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Input,
  Label,
  Typography,
} from '@components';

// ** constants
import { routes } from '@constants';

// ** locals
import { styles } from './style';

interface SignInFormProps extends CardProps {}

const SignInForm = (props: SignInFormProps) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Typography variant="label-xl-bold">Login</Typography>
        <Typography variant="description-sm" as="p" className="text-text-500">
          Enter your email below to login to your account.
        </Typography>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <div className={styles.fieldWrapper}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className={styles.fieldWrapper}>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button className={styles.submitBtn}>Sign in</Button>
        <Typography variant="description-sm" className={styles.description}>
          Do not have an account?{' '}
          <Link href={routes.SIGN_UP_PAGE_ROUTE} className={styles.signUpLink}>
            Sign up
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
