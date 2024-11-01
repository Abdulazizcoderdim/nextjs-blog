import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AuthBtn from './auth-btn';

const SignInPage = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Continue with Github</CardTitle>
          <CardDescription>
            Sign in to your account using your Github account
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <AuthBtn />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
