'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Avatar() {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <div className="dropdown dropdown-end">
      <div className="avatar" tabIndex={0}>
        <div className="w-50 rounded-full">
          <img
            src="/images/user-icon.svg"
            alt="user icon"
            width={30}
            height={30}
            className="scale-75"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu shadow bg-base-100 w-56 p-0 [&_li>*]:rounded-none"
      >
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <div className="btn-error" onClick={signOut}>
            Log Out
          </div>
        </li>
      </ul>
    </div>
  );
}
