import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import { Database } from '@/lib/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';

export default async function IndividualCourse({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from('courses')
    .select('duration, name, description')
    .eq('id', id)
    .limit(1)
    .single();

  if (error) {
    console.log(error);
    return <div>Error loading course</div>;
  }

  let sidebarItems = Array<sidebarLink>(
    { title: OVERVIEW, link: `/courses/${id}/overview` },
    { title: CONTENT, link: `/courses/${id}/content` },
    { title: TOOLBOX, link: `/courses/${id}/toolbox` },
  );
  // TODO: Get progress for sidebar from database
  return (
    <div className="flex flex-row h-auto min-h-screen">
      <div className="w-1/5 flex">
        <Sidebar
          title={data.name}
          selected={OVERVIEW}
          items={sidebarItems}
          progress={0.69}
        ></Sidebar>
      </div>
      <div className="w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
