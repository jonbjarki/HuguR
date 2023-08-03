'use client';
import { Database } from '@/lib/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Enum representing the different views for the authentication modal.
 */
enum View {
  SIGN_IN,
  SIGN_UP,
  CHECK_EMAIL,
}

export default function Auth() {
  const [view, setView] = useState<View>(View.SIGN_IN);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    // handle view override
    setView(view);
    setErr('');
  }, [view]);

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) setErr(error.message);
    else {
      setView(View.CHECK_EMAIL);
    }
  };

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setErr(error.message);
    else {
      router.back(); // close modal
      router.refresh();
    }
  };

  switch (view) {
    case View.SIGN_IN:
      return (
        <>
          <div className="flex flex-col items-center justify-between h-auto">
            <h1 className="text-5xl font-bold mb-4">Sign In</h1>
            <input
              className="input input-bordered input-primary w-full max-w-xs mb-4"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              className="input input-bordered input-primary w-full max-w-xs mb-4"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button
              className="btn btn-outline btn-primary mb-2"
              onClick={handleSignIn}
            >
              Sign in
            </button>
            <p className="text-gray-500 mb-2 text-center">
              Don&apos;t have an account?{' '}
              <button
                onClick={() => setView(View.SIGN_UP)}
                className="text-blue-500 link"
              >
                Sign Up
              </button>
            </p>
          </div>
          {err && (
            <div className="alert alert-error mt-2 max-w-sm m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{err}</span>
            </div>
          )}
        </>
      );
    case View.SIGN_UP:
      return (
        <>
          <div className="flex flex-col items-center justify-center h-auto">
            <h1 className="text-5xl font-bold mb-4">Sign Up</h1>
            <input
              className="input input-bordered input-primary w-full max-w-xs mb-4"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              className="input input-bordered input-primary w-full max-w-xs mb-4"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button
              className="btn btn-outline btn-primary mb-2"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <p className="text-gray-500 text-center">
              Already have an account?{' '}
              <button
                onClick={() => setView(View.SIGN_IN)}
                className="text-blue-500 link"
              >
                Sign In
              </button>
            </p>
          </div>
          {err && (
            <div className="alert alert-error mt-2 max-w-sm m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{err}</span>
            </div>
          )}
        </>
      );
    case View.CHECK_EMAIL:
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Signup Successful!
          </h1>
          <p className="text-gray-500 mb-4">
            Check your email for the confirmation link.
          </p>
          <button
            className="btn btn-outline btn-primary mb-4"
            onClick={() => {
              setView(View.SIGN_IN);
              router.back();
            }}
          >
            Close
          </button>
        </div>
      );
  }
}
