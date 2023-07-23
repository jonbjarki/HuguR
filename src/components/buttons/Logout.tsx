/**
 * Logout wrapper component that signs out the user and redirects to the home page.
 * @param children - The child components to be rendered.
 * @returns A div element with an onClick event that signs out the user.
 */
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Logout({ children }) {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return <span onClick={signOut}>{children}</span>;
}
