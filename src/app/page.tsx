'use client'

import Image from 'next/image'
import styles from './home.module.css'
import Bubble from '@/components/bubble'
import HomeLine from '@/components/HomeLine'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax'
import HomeCover from '@/components/HomeCover'


export default function Home() {
  
  return (
    // Parallax Cover Banner
    <div className='w-full h-fit'>
      <ParallaxProvider>
        <div className='w-full h-96'>
          <figure><HomeCover /></figure>
          <figcaption className='-translate-y-36 text-right text-lm-light mr-5'>
            <h1 className='text-6xl font-bold filter drop-shadow-lg'>Welcome to HuguR</h1>
            <p className='text-lg filter drop-shadow-2xl'>our goal is to provide free access to mental health support and advice<br /> for students made by students</p></figcaption>
        </div>
      </ParallaxProvider>
      
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
  )
}
