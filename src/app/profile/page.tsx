import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex justify-center">
        <div>
          <h1>You need to be signed in to view your profile</h1>
          <HomeButton />
        </div>
      </div>
    );
  }

  return (
    <div className="h-4/5 flex justify-center items-center p-4">
      <div className="flex flex-col items-center">
        <Image
          src="/images/user-icon.svg"
          alt="user icon"
          width={100}
          height={100}
        />
        <div className="mt-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{user?.email.split('@')[0]}</h1>
            <h2 className="text-lg font-medium">
              Account created at {user?.created_at.slice(0, 10)}
            </h2>
          </div>
          <div className="flex flex-col items-start mt-4 justify-between w-full">
            <label className="text-sm font-medium text-gray-700 flex-col items-center w-full">
              Progress:
            </label>
            <progress className="progress w-full" value={20} max="100" />
            <label className="text-sm font-medium text-gray-700 flex-row items-center w-full">
              Second Progress:
            </label>
            <progress className="progress w-full" value={50} max="100" />
          </div>
          <div className="flex flex-col items-start mt-4 w-auto justify-between">
            <label className="text-sm font-medium text-gray-700 flex-col items-center">
              Trophies:
            </label>
            <div className="flex flex-row justify-evenly mt-2 w-full">
              <div className="w-50 rounded-full bg-purple-400">
                <img
                  src="/images/badge1.svg"
                  alt="badge 1"
                  width={50}
                  height={50}
                  className="p-2"
                />
              </div>
              <div className="w-50 rounded-full bg-pink-400">
                <img
                  src="/images/badge2.svg"
                  alt="badge 2"
                  width={50}
                  height={50}
                  className="p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeButton() {
  'use client';

  return (
    <Link href="/login">
      <button className="btn btn-accent">Sign In</button>
    </Link>
  );
}
