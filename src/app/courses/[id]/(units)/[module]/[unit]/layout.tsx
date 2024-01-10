'use client';

import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSelector } from '@/store/store';
import { getModuleState } from '@/store/slices/moduleSlice';
import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

export default async function UnitLayout({
  children,
  params: { id, module },
}: {
  children: ReactNode;
  params: { id: string; module: string };
}) {
  const supabase = createClientComponentClient();

  const { data: units, error } = await supabase
    .from('units')
    .select('*, modules(id, name)')
    .eq('module_id', module);

  let sidebarItems: Array<sidebarLink> = units
    ? units?.map((unit) => {
        return {
          id: unit.id,
          title: unit.name,
          link: `/courses/${id}/${module}/${unit.id}`,
          finished: false,
        };
      })
    : [];

  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen">
      <div className="w-full h-fit md:h-auto md:w-1/5 flex">
        <Link
          href={`/courses/${id}/content`}
          className="absolute z-10 top-2 left-1 h-10 w-10 text-base-100 drop-shadow-text"
        >
          <Icon path={mdiChevronLeft} />
        </Link>
        <Sidebar
          title={units ? units![0].modules.name : ''}
          selected={''} // ! fix
          items={sidebarItems}
          progress={0}
          user={false}
        ></Sidebar>
      </div>
      <div className="w-[50%] mx-auto bg-base-100 my-[3rem] font-sans">
        {children}
      </div>
    </div>
  );
}
