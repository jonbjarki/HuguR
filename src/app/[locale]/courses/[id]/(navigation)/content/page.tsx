import ContentSection from '@/components/course/contentSection';
// import { contentUnitProps } from '@/components/course/contentUnit';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function CourseContent({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from('modules')
    .select('*, units(order_number, name, id, user_unit_completion(completed))')
    .eq('course_id', params.id)
    .order('order_number');

  return (
    <div className="h-full w-2/3 flex flex-col items-center mx-auto">
      <h1 className="text-lm-medium-dark text-4xl mt-8 mb-16">Modules</h1>
      {data?.map((module) => (
        <ContentSection
          key={module.id}
          name={module.name[params.locale]}
          units={module.units}
          params={params}
        />
      ))}
    </div>
  );
}
