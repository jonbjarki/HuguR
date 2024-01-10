'use client';

import ContentSection from '@/components/course/contentSection';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { contentUnitProps } from '@/components/course/contentUnit';

export async function getUnitProps(
  module: { id: any; name: string },
  courseId,
) {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase
    .from('units')
    .select('*')
    .eq('module_id', module.id);

  return data?.map(
    (unit) =>
      ({
        name: unit.name,
        link: `/courses/${courseId}/${module.id}/${unit.id}`,
        id: unit.id,
        moduleId: module.id,
      } as contentUnitProps),
  );
}

export default async function CourseContent({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase
    .from('courses')
    .select(
      `
    modules (
      id,
      name
    )
  `,
    )
    .eq('id', params.id)
    .limit(1)
    .single();

  return (
    <div className="h-full w-2/3 flex flex-col items-center mx-auto">
      <h1 className="text-lm-medium-dark text-4xl mt-8 mb-16">Modules</h1>
      {data?.modules.map(async (module) => (
        <ContentSection
          key={module.id}
          name={module.name}
          units={await getUnitProps(module, params.id)}
          params={params}
          moduleId={module.id}
        />
      ))}
    </div>
  );
}
