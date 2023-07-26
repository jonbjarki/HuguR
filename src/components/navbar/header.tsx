import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LoginButton from '@/components/buttons/LoginButton';
import Avatar from '@/components/navbar/Avatar';
import HamburgerMenu from './HamburgerMenu';
import { HomeIcon } from './HomeIcon';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky h-16 bg-lm-very-light top-0 z-[99] flex flex-row flex-nowrap justify-between items-center shadow-md md:px-4">
      <HomeIcon />

      <nav className="hidden md:flex flex-row flex-nowrap text-lg gap-6">
        <Link href="/" className="">
          Reading
        </Link>
        <Link href="/courses" className="" prefetch>
          Courses
        </Link>
        <Link href="/" className="">
          Exercises
        </Link>
        <Link href="/" className="">
          Diary
        </Link>
      </nav>

      <h1 className="text-3xl md:hidden">HuguR</h1>

      <menu className="hidden md:flex flex-row flex-nowrap gap-6">
        <li>
          <button className="">Get Support</button>
        </li>
        <li>
          <button className="">EN v</button>
        </li>
      </menu>

      <div className="hidden md:block">
        {user ? <Avatar /> : <LoginButton />}
      </div>

      <HamburgerMenu />
    </header>
  );
}
