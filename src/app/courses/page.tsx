import Image from 'next/image'
import styles from './courses.module.css'
import Course from '@/components/course'

export default function CourseHome() {
  return (
    <main className="mt-6 w-11/12 m-auto">
      <h1 className="text-4xl text-center font-normal">Courses</h1>
      <ul className="flex flex-row flex-wrap gap-8">
        <Course
          ID={1}
          title="Stress Management"
          duration="2 weeks"
          content="Short description of course and what it entails.
          In this course you will lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed pharetra arcu. Phasellus posuere dictum maximus."
          imgSrc="/images/personsofa.png" />
      </ul>
    </main>
  )
}
