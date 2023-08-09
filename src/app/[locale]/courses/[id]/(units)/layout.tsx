'use client';

import Sidebar, { sidebarLink } from '@/components/sidebar/sidebar';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import Link from 'next-intl/link';

export default function UnitLayout({ children, params }) {
  const id = params != null ? params.id : '0'; // default to id=0 if params are null
  const unit = params != null ? params.unit : '0'; // default to unit=0 if params are null
  let sidebarItems = Array<sidebarLink>(
    { title: 'Unit 1', link: '/courses/' + id + '/1', finished: true },
    { title: 'Unit 2', link: '/courses/' + id + '/2', finished: true },
    { title: 'Unit 3', link: '/courses/' + id + '/3', finished: false },
  );
  return (
    <div className="flex flex-row h-auto min-h-screen">
      <div className="w-1/5 flex">
        <Link
          href={'/courses/' + id + '/content'}
          className="absolute z-10 top-2 left-1 h-10 w-10 text-base-100 drop-shadow-text"
        >
          <Icon path={mdiChevronLeft} />
        </Link>
        {/* TODO: Get week data and progress from database */}
        <Sidebar
          title="Week 1"
          selected={'Unit ' + unit}
          items={sidebarItems}
          progress={0.3}
        ></Sidebar>
      </div>
      <div className="w-4/5 flex bg-base-100">{children}</div>
    </div>
  );
}
