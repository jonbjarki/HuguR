import styles from './courses.module.css';
import Course from '@/components/course/course';
import data from '../../mockdata.json';

export default async function CourseHome() {
  return (
    <main className="mt-6 w-11/12 m-auto">
      <h1 className="text-4xl text-center font-normal">Courses</h1>
      <ul className={styles.courses}>
        {data.courses.map((item) => (
          <Course
            key={item.ID}
            ID={item.ID}
            title={item.title}
            duration={item.duration}
            content={item.content}
            imgSrc={item.imgSrc}
          />
        ))}
      </ul>
    </main>
  );
}
