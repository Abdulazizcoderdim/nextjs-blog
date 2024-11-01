'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthBtn = () => {
  const { data: session } = useSession();
  return (
    <>
      <Button
        onClick={() => {
          session ? signOut() : signIn('github');
        }}
      >
        <Github className="mr-2" /> 
        {session ? 'Sign out' : 'Sign in'}
      </Button>
    </>
  );
};

export default AuthBtn;
