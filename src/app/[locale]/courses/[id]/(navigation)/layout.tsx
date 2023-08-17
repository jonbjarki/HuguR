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

  // Get user ID
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user.id;

  // Get course data
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

  // Get user's progress in course
  async function getProgress() {
    const { data, error } = await supabase
      .from('user_in_course')
      .select('progress')
      .match({ course_id: id, user_id: userId })
      .limit(1)
      .single();

    if (error) {
      console.log(error);
    }
    return data?.progress;
  }

  const progress = await getProgress();

  let sidebarItems = Array<sidebarLink>(
    { title: OVERVIEW, link: `/courses/${id}/overview` },
    { title: CONTENT, link: `/courses/${id}/content` },
    { title: TOOLBOX, link: `/courses/${id}/toolbox` },
  );

  // TODO: Make sure to adjust progress based on range from progress column in user_in_course table
  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen">
      <div className="w-full h-fit md:h-auto md:w-1/5 flex">
        <Sidebar
          title={data.name}
          selected={OVERVIEW}
          items={sidebarItems}
          progress={progress}
        ></Sidebar>
      </div>
      <div className="w-full md:w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
