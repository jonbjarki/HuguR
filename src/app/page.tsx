import Image from 'next/image';
import Bubble from '@/components/bubble';
import HomeLine from '@/components/HomeLine';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Hero from '@/components/hero';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    // Parallax Cover Banner
    <div className="w-full h-fit">
      <Hero />
      {/* Main */}
      <main className="flex flex-col items-center gap-16 xl:w-10/12 max-w-6xl mx-auto mt-10">
        {/* Line for HuguR Introduction replaced with Banner
        <HomeLine
          title="HuguR"
          content="Welcome to HuguR. Our goal is to provide free access to mental health support and advice for students made by students"
          imgSrc="/images/sittingman.png" /> */}

        <HomeLine
          title="Try Our Courses"
          content="We have carefully crafted psychologist approved courses that are designed to help you manage your mental health and provide you with advice for the future"
          imgSrc="/images/wavingwoman.png"
          isRight={true}
          btnText="Go To Courses"
          btnLink="/courses"
        />

        <HomeLine
          title="Exercises"
          content="The diary allows you to write down how you felt during some situation, and how it affected you. So you can have a clear view of your progress."
          imgSrc="/images/exercisespic.png"
          isRight={false}
          btnText="Go To Exercises"
          btnLink="/diary"
        />

        <HomeLine
          title="Diary"
          content="Not ready to commit to a course?
          Try our individual exercises, designed to give you quick and easy to access mental health advice"
          imgSrc="/images/diarypic.png"
          isRight={true}
          btnText="Go to Diary"
          btnLink="/exercises"
        />
      </main>
    </div>
  );
}
