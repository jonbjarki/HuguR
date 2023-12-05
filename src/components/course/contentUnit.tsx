'use client';

import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCircleOutline } from '@mdi/js';
import { useDispatch, useSelector } from '@/store/store';
import { getModuleState, setModule } from '@/store/slices/moduleSlice';

export interface contentUnitProps {
  link: string;
  name: string;
  completed?: boolean;
  id: string;
  user_unit_completion?: Array<any>;
  moduleId: number;
}

export default function ContentUnit({
  link,
  name,
  completed = false,
  moduleId,
}: contentUnitProps) {
  const dispatch = useDispatch();

  const icon = completed ? mdiCheckCircle : mdiCircleOutline;
  return (
    <div
      className="text-xl text-base-content text-left flex items-center gap-8"
      onClick={() => dispatch(setModule(moduleId))}
    >
      <Icon path={icon} className="w-10 h-10 text-primary-focus" />
      <Link href={link}>{name}</Link>
    </div>
  );
}
