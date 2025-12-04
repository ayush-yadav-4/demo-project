'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/providers/AuthProvider';
import { signInWithGoogle } from '@/lib/firebaseClient';
import { toast } from 'sonner';
import { Loader2, Chrome } from 'lucide-react';

interface GoogleAuthButtonProps {
  text?: string;
  redirectTo?: string;
}

export default function GoogleAuthButton({
  text = 'Continue with Google',
  redirectTo = '/',
}: GoogleAuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  async function handleGoogleSignIn() {
    setIsLoading(true);
    try {
      const idToken = await signInWithGoogle();
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Google sign in failed');

      setUser(result.user);
      toast.success('Successfully signed in with Google!');
      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : 'Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Chrome className="mr-2 h-4 w-4" />
      )}
      {text}
    </Button>
  );
}
