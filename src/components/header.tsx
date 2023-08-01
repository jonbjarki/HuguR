import Link from 'next/link';
import Image from 'next/image';
import hamburgerIcon from '/public/images/hamburger.svg';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import SignOut from './signOut';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <header className="sticky bg-base-100 top-0 z-40 flex flex-row flex-nowrap justify-between items-center px-4 shadow-md">
      <Link href="/">
        <Image
          src="/images/RU.png"
          width={87}
          height={87}
          alt="Reykjavik University Logo"
          className=""
        />
      </Link>

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

      <menu className="hidden md:flex flex-row flex-nowrap gap-6">
        <li>
          <button className="">Get Support</button>
        </li>
        <li>
          <button className="">EN v</button>
        </li>
      </menu>

      <Link href="/login">
        <div className="avatar">
          <div className="w-24 h-24 rounded-full flex justify-center items-center">
            <Image
              src="/images/user-icon.svg"
              alt="user icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Link>

      {user && (
        <SignOut>
          <button className="btn btn-error">Sign Out</button>
        </SignOut>
      )}

      {/* Mobile Nav */}

      <h1 className="text-3xl md:hidden">HuguR</h1>
      <Image
        className="md:hidden"
        src={hamburgerIcon}
        alt="navigation menu toggle"
      />
      <nav className="hidden"></nav>
    </header>
  );
}
