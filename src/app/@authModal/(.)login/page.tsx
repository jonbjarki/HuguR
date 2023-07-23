'use client';

import Modal from '@/components/modal';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { Database } from '@/lib/database.types';

/**
 * Enum representing the different views for the authentication modal.
 */
enum View {
  SIGN_IN,
  SIGN_UP,
  CHECK_EMAIL,
}

export default function Login() {
  return (
    <Modal>
      <Auth />
    </Modal>
  );
}

function Auth() {
  const [view, setView] = useState<View>(View.SIGN_IN);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    // handle view override
    setView(view);
  }, [view]);

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setView(View.CHECK_EMAIL);
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.back();
    router.refresh();
  };

  switch (view) {
    case View.SIGN_IN:
      return (
        <div className="flex flex-col items-center justify-center">
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <button
            className="btn btn-outline btn-accent mb-4"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <p className="text-gray-500 mb-4">
            Don&apos;t have an account?{' '}
            <button
              onClick={() => setView(View.SIGN_UP)}
              className="text-blue-500 link"
            >
              Sign Up
            </button>
          </p>
        </div>
      );
    case View.SIGN_UP:
      return (
        <>
          <div className="flex flex-col items-center justify-center">
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button
              className="btn btn-outline btn-accent mb-4"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <p className="text-gray-500">
              Already have an account?{' '}
              <button
                onClick={() => setView(View.SIGN_IN)}
                className="text-blue-500 link"
              >
                Sign In
              </button>
            </p>
          </div>
        </>
      );
    case View.CHECK_EMAIL:
      return (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 mb-4">
            Check your email for the confirmation link.
          </p>
          <button
            className="btn btn-outline btn-accent mb-4"
            onClick={() => setView(View.SIGN_IN)}
          >
            Sign in
          </button>
        </div>
      );
  }
}
