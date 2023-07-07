import Image from 'next/image'
import styles from './courses.module.css'
import Course from '@/components/course'

export default function CourseHome() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Courses</h1>
      <ul className={styles.courseList}>
        <Course 
          title="Stress Management"
          duration="2 weeks"
          content="Short description of course and what it entails.
          In this course you will lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed pharetra arcu. Phasellus posuere dictum maximus."
          imgSrc="/images/personsofa.png" />
      </ul>
    </main>
  )
}