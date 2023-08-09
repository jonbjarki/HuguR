import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import { ReactNode } from 'react';

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';
const COURSE = 'Stress Management';

export default function IndividualCourse({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
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
          title={COURSE}
          selected={OVERVIEW}
          items={sidebarItems}
          progress={0.69}
        ></Sidebar>
      </div>
      <div className="w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
