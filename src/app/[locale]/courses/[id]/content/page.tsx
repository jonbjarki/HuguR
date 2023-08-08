import ContentSection from '@/components/course/contentSection';
import { contentUnitProps } from '@/components/course/contentUnit';

export default function CourseContent() {
  // TODO: fetch the data from the database

  const WEEK1 = Array<contentUnitProps>(
    { title: 'Unit 1', link: '/', completed: true },
    { title: 'Unit 2', link: '/', completed: true },
    { title: 'Unit 3', link: '/', completed: true },
    { title: 'Unit 4', link: '/', completed: true },
    { title: 'Unit 5', link: '/', completed: true },
  );

  const WEEK2 = Array<contentUnitProps>(
    { title: 'Unit 1', link: '/', completed: true },
    { title: 'Unit 2', link: '/', completed: true },
    { title: 'Unit 3', link: '/', completed: true },
    { title: 'Unit 4', link: '/', completed: false },
    { title: 'Unit 5', link: '/', completed: false },
  );

  const WEEK3 = Array<contentUnitProps>(
    { title: 'Unit 1', link: '/', completed: false },
    { title: 'Unit 2', link: '/', completed: false },
    { title: 'Unit 3', link: '/', completed: false },
    { title: 'Unit 4', link: '/', completed: false },
    { title: 'Unit 5', link: '/', completed: false },
  );

  return (
    <div className="h-full w-2/3 flex flex-col items-center mx-auto">
      <h1 className="text-lm-medium-dark text-4xl mt-8 mb-16">Modules</h1>
      <ContentSection title="Week 1" units={WEEK1} />
      <ContentSection title="Week 2" units={WEEK2} />
      <ContentSection title="Week 3" units={WEEK3} />
    </div>
  );
}
