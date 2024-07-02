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
import { styles } from './_style';

interface SignUpFormProps extends CardProps {}

const SignInForm = (props: SignUpFormProps) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Typography variant="label-xl-bold">Sign Up</Typography>
        <Typography variant="description-sm" as="p" className="text-text-500">
          Enter your information to create an account
        </Typography>
      </CardHeader>
      <CardContent>
        <div className={styles.cardContent}>
          <div className="grid grid-cols-2 gap-4">
            <div className={styles.fieldWrapper}>
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className={styles.fieldWrapper}>
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className={styles.fieldWrapper}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className={styles.fieldWrapper}>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className={styles.submitBtn}>
            Create an account
          </Button>
          <Typography variant="description-sm" className={styles.description}>
            Already have an account?{' '}
            <Link
              href={routes.SIGN_IN_PAGE_ROUTE}
              className={styles.signInLink}
            >
              Sign in
            </Link>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
