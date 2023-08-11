import HomeLine from '@/components/home/HomeLine';
import Hero from '@/components/common/hero';

export default function Home() {
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
          imgSrc="/images/courses-img.svg"
          isRight={true}
          btnText="Go To Courses"
          btnLink="/courses"
        />

        {/* <HomeLine
          title="Exercises"
          content="The diary allows you to write down how you felt during some situation, and how it affected you. So you can have a clear view of your progress."
          imgSrc="/images/exercisespic.png"
          isRight={false}
          btnText="Go To Exercises"
          btnLink="/diary"
        /> */}

        <HomeLine
          title="Diary"
          content="The diary allows you to write down how you felt during some situation, and how it affected you. So you can have a clear view of your progress."
          imgSrc="/images/diary-img.svg"
          isRight={false}
          btnText="Go to Diary"
          btnLink="/diary"
        />

        <HomeLine
          title="Reading"
          content="Our articles provide information on all things mental health, read up on general advice, or educate yourself on different mental health condition"
          imgSrc="/images/reading-img.svg"
          isRight={true}
          btnText="Go To Reading"
          btnLink="/reading"
        />
      </main>
    </div>
  );
}
