'use client';

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  useEffect(() => {
    signIn('google', { callbackUrl });
    signIn('github', { callbackUrl });  
  }, [callbackUrl]);

  return (
    <div>
      <h1>Redirecting to signin... 
      (Signed in with {token.provider === 'github' ? 'GitHub' : 'Google'})
      </h1>
    </div>
  );
}