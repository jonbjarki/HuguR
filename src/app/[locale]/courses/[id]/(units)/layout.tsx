'use client';

import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import Link from 'next-intl/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSelector } from '@/store/store';
import { getModuleState } from '@/store/slices/moduleSlice';

export default async function UnitLayout({ children, params }) {
  const id = params != null ? params.id : '0'; // default to id=0 if params are null
  const unit = params != null ? params.unit : '0'; // default to unit=0 if params are null
  const supabase = createClientComponentClient();
  const { module_id } = useSelector(getModuleState);

  const { data: units, error } = await supabase
    .from('units')
    .select('*, modules(course_id, name), user_unit_completion(completed)')
    .eq('modules.course_id', id)
    .eq('module_id', module_id);

  let sidebarItems: Array<sidebarLink> = units
    ? units.map((unit) => {
        return {
          id: unit.id,
          title: unit.name[params.locale],
          link: `/courses/${id}/${unit.id}`,
          finished:
            unit.user_unit_completion.length > 0
              ? unit.user_unit_completion[0].completed
              : false,
        };
      })
    : [];

  return (
    <div className="flex flex-row h-auto min-h-screen">
      <div className="w-1/5 flex">
        <Link
          href={`/courses/${id}/content`}
          className="absolute z-10 top-2 left-1 h-10 w-10 text-base-100 drop-shadow-text"
        >
          <Icon path={mdiChevronLeft} />
        </Link>
        <Sidebar
          title={units ? units[0].modules.name[params.locale] : ''}
          selected={'Unit ' + unit}
          items={sidebarItems}
          progress={0}
          user={false}
        ></Sidebar>
      </div>

      <div className="w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
