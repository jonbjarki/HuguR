import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LoginButton from '@/components/buttons/LoginButton';
import Avatar from '@/components/navbar/Avatar';
import HamburgerMenu from './HamburgerMenu';
import { HomeIcon } from './HomeIcon';
import LanguageMenu from './LanguageMenu';
import Navigation from './Navigation';
import SupportButton from '@/components/buttons/SupportButton';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
<<<<<<< HEAD
    <header className="sticky h-16 bg-lm-very-light top-0 z-[99] flex flex-row flex-nowrap justify-between items-center shadow-md md:px-4">
      <HomeIcon />

      <nav className="hidden md:flex flex-row flex-nowrap text-lg gap-6">
        <Link href="/reading" className="">
          Reading
        </Link>
        <Link href="/courses" className="" prefetch>
          Courses
        </Link>
        <Link href="/" className="">
          Exercises
        </Link>
        <Link href="/diary" className="">
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
=======
    <header className="navbar sticky bg-lm-very-light z-[99] shadow-md top-0 justify-evenly">
      <div className="navbar-start flex-shrink">
        <HomeIcon />
>>>>>>> 20d08bb392992db894bf242a1ab0a341d7dd1ea1
      </div>
      <h1 className="text-3xl md:hidden">HuguR</h1>
      <div className="hidden md:block navbar-center">
        <Navigation />
      </div>
      <div className="navbar-end gap-4">
        <div className="hidden md:block">
          <SupportButton />
        </div>
        <LanguageMenu />

        <div className="hidden md:block">
          {user ? <Avatar /> : <LoginButton />}
        </div>

        <HamburgerMenu />
      </div>
    </header>
  );
}
