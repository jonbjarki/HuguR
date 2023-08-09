import Sidebar from '@/components/sidebar/sidebar';
import { sidebarLink } from '@/components/sidebar/sidebarItem';
import { ReactNode } from 'react';

const OVERVIEW = 'Course Overview';
const CONTENT = 'Course Content';
const TOOLBOX = 'Toolbox';

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
  return (
    <div className="flex flex-row h-auto min-h-screen">
      <div className="w-1/5 flex">
        <Sidebar selected={OVERVIEW} items={sidebarItems}></Sidebar>
      </div>
      <div className="w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
