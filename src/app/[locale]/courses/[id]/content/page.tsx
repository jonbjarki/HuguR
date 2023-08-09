import ContentSection from '@/components/course/contentSection';
import { contentUnitProps } from '@/components/course/contentUnit';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function CourseContent({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from('units')
    .select('*, user_unit_completion (completed)')
    .eq('course_id', params.id);

  const weeks: Array<Array<contentUnitProps>> = [];

  // Two dimensional array indexed by week number
  // e.g. weeks[1] = week 1
  data!.forEach((unit) => {
    if (!weeks[unit.week]) {
      weeks[unit.week] = [];
    }
    weeks[unit.week].push({
      title: unit.title,
      link: `/courses/${params.id}/${unit.id}`,
      completed:
        unit.user_unit_completion.length > 0
          ? unit.user_unit_completion[0].completed
          : false,
    });
  });

  return (
    <div className="h-full w-2/3 flex flex-col items-center mx-auto">
      <h1 className="text-lm-medium-dark text-4xl mt-8 mb-16">Modules</h1>
      {weeks.map((week, index) => (
        <ContentSection key={index} title={`Week ${index}`} units={week} />
      ))}
    </div>
  );
}
