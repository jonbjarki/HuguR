import Course from '@/components/course/course';
import styles from './courses.module.css';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function CourseHome({ params: { locale } }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: courses, error } = await supabase.from('courses').select('*');

  if (error) {
    console.error(error);
  }

  return (
    <main className="mt-6 w-11/12 m-auto">
      <h1 className="text-4xl text-center font-normal">Courses</h1>
      <ul className={styles.courses}>
        {courses?.map((course) => (
          <Course
            key={course.id}
            ID={course.id}
            title={course.name[locale]}
            duration={course.duration}
            content={course.description[locale]}
            imgSrc={course.image_url}
          />
        ))}
      </ul>
    </main>
  );
}
