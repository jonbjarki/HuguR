import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';
import LoginButton from '@/components/buttons/LoginButton';
import ProfileImage from '@/components/profile/ProfileImage';
import ProfileProgress from '@/components/profile/ProfileProgress';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1>You need to be signed in to view your profile</h1>
        <LoginButton />
      </div>
    );
  }

  return (
    <div className="w-full h-fit lg:p-16 md:p-8 sm:p-4 p-2">
      <div className="flex flex-col w-full justify-start place-items-center mb-16 gap-4">
        <ProfileImage />
        <h1 className="text-2xl text-justify font-bold">
          I am {user.email.split('@')[0]}
        </h1>
        <h1 className="text-lg text-justify">
          I&apos;ve been here since {user.created_at.slice(0, 10)}
        </h1>
      </div>
      <div className="divider">My Progress</div>
      <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:px-32 md:px-16 sm:px-8 px-4">
        <ProfileProgress title="Exercises Completed" progress={10} />
        <ProfileProgress title="Courses Completed" progress={40} />
      </div>
      <div className="divider">Trophy Case</div>
      <div className="grid h-fit card bg-base-300 rounded-box place-items-center">
        <div className="m-2">
          <div className="rounded-full bg-slate-600 p-4">
            <Image
              src="/images/badge1.svg"
              alt="badge 1"
              width={40}
              height={40}
            />
          </div>
          <label className="label label-text">First Visit</label>
        </div>
      </div>
    </div>
  );
}
