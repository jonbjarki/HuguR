import Image from 'next/image'
import styles from './home.module.css'
import Bubble from '@/components/bubble'
import HomeLine from '@/components/HomeLine'

export default function Home() {
  return (
    <div className='w-full'>
      <main className="flex flex-col items-center gap-16 xl:w-10/12 max-w-6xl mx-auto mt-10">
        <HomeLine
          title="HuguR"
          content="Welcome to HuguR. Our goal is to provide free access to mental health support and advice for students made by students"
          imgSrc="/images/sittingman.png" />
        
        <HomeLine
          title="Try Our Courses"
          content="We have carefully crafted psychologist approved courses that are designed to help you manage your mental health and provide you with advice for the future"
          imgSrc="/images/wavingwoman.png"
          isRight={true}
          btnText="Go To Courses"
          btnLink="/courses"
          />
      </main>
    </div>
  )
}
