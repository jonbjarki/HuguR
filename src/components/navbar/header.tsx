import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LoginButton from '@/components/buttons/LoginButton';
import Avatar from '@/components/navbar/Avatar';
import HamburgerMenu from './HamburgerMenu';
import { HomeIcon } from './HomeIcon';
import Navigation from './Navigation';
import SupportButton from '@/components/buttons/SupportButton';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="navbar sticky bg-lm-very-light z-[99] shadow-md top-0 justify-evenly">
      <div className="navbar-start flex-shrink">
        <HomeIcon />
      </div>
      <h1 className="text-3xl md:hidden">HuguR</h1>
      <div className="hidden md:block navbar-center">
        <Navigation />
      </div>
      <div className="navbar-end gap-4">
        <div className="hidden md:block">
          <SupportButton />
        </div>

        <div className="hidden md:block">
          {user ? <Avatar /> : <LoginButton />}
        </div>

        <HamburgerMenu />
      </div>
    </header>
  );
}
