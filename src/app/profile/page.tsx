import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LoginButton from '@/components/buttons/LoginButton';
import ProfileImage from '@/components/profile/ProfileImage';
import ProfileProgress from '@/components/profile/ProfileProgress';
import { Trophy } from '../../components/profile/Trophy';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 p-16">
        <h1>You need to be signed in to view your profile</h1>
        <LoginButton />
      </div>
    );
  }

  // TODO: Temp until we have trophies in the DB remove later
  function getD(): any {
    return Date().toLocaleString().slice(0, 15);
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
      <div className="divider ">My Progress</div>
      <div className="grid h-fit card rounded-box place-items-center lg:px-32 md:px-16 sm:px-8 px-4">
        <ProfileProgress
          title="Exercises Completed"
          progress={10}
          total={100}
        />
        <ProfileProgress title="Courses Completed" progress={40} total={100} />
      </div>
      <div className="divider">Trophy Case</div>
      <div className="flex flex-row flex-wrap h-fit card rounded-box place-content-center">
        <Trophy name="First Visit" icon="badge1.svg" date={getD()} />
      </div>
    </div>
  );
}
