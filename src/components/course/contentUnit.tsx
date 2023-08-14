'use client';

import Link from 'next-intl/link';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCircleOutline } from '@mdi/js';

export interface contentUnitProps {
  id: number;
  name: string;
  link: string;
  user_unit_completion?: Array<any>;
}

export default function ContentUnit({ name, link, completed = false }) {
  const icon = completed ? mdiCheckCircle : mdiCircleOutline;
  return (
    <div className="text-xl text-base-content text-left flex items-center gap-8">
      <Icon path={icon} className="w-10 h-10 text-primary-focus" />
      <Link href={link}>{name}</Link>
    </div>
  );
}
