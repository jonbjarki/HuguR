'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next-intl/link';
import { useRouter } from 'next/navigation';

export default function Avatar() {
  const t = useTranslations('Avatar');
  const supabase = createClientComponentClient();
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src="/images/user-icon.svg" alt="user icon" fill />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/profile">{t('profile')}</Link>
        </li>
        <li>
          <a onClick={signOut} className="bg-error">
            {t('logout')}
          </a>
        </li>
      </ul>
    </div>
  );
}
