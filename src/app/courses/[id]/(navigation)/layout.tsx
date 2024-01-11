import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import { Database } from '@/lib/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';

const fetchProgress = async (client, course_id) => {
  const { data, error } = await client
    .from('user_in_course')
    .select('progress')
    .eq('course_id', course_id)
    .limit(1)
    .single();
  if (error) {
    return 0;
  }

  return data.progress;
};

export default async function IndividualCourse({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const progress = await fetchProgress(supabase, id);
  const {
    data: { session: user },
  } = await supabase.auth.getSession();

  let sidebarItems = Array<sidebarLink>(
    { id: 1, title: OVERVIEW, link: `/courses/${id}/overview` },
    { id: 2, title: CONTENT, link: `/courses/${id}/content` },
    { id: 3, title: TOOLBOX, link: `/courses/${id}/toolbox` },
  );

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single();

  if (error) throw error;
  const courseData = data;

  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen">
      <div className="w-full h-fit md:h-auto md:w-1/5 flex">
        <Sidebar
          title={courseData.name}
          selected={OVERVIEW}
          items={sidebarItems}
          progress={progress / 100}
          user={!!user}
        ></Sidebar>
      </div>
      <div className="w-full md:w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
