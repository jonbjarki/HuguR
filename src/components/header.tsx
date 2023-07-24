import Link from 'next/link';
import Image from 'next/image';
import hamburgerIcon from '/public/images/hamburger.svg';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LoginButton from '@/components/buttons/LoginButton';
import Avatar from '@/components/Avatar';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky bg-lm-very-light top-0 z-40 flex flex-row flex-nowrap justify-between items-center px-4 shadow-md">
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

      <menu className="hidden md:flex flex-row flex-nowrap gap-6">
        <li>
          <button className="">Get Support</button>
        </li>
        <li>
          <button className="">EN v</button>
        </li>
      </menu>

      {user ? <Avatar /> : <LoginButton />}

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
