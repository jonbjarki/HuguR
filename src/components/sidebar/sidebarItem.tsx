'use client';
import Icon from '@mdi/react';
import { mdiCircleOutline, mdiCheckCircle } from '@mdi/js';
import Link from 'next/link';

export interface SidebarItemProps {
  title: string;
  link: string;
  isSelected?: boolean;
  setSelected?: any;
  finished?: boolean | undefined;
}

export default function SidebarItem({
  title,
  link,
  isSelected = false,
  setSelected,
  finished,
}: SidebarItemProps) {
  let style =
    'py-3 hover:bg-secondary-focus flex flex-row text-lg text-secondary-content';
  const selectedSettings = isSelected ? ' bg-lm-whitesmoke-dark font-bold' : '';
  style += selectedSettings;

  // Highlight selected item
  function handleClick() {
    if (setSelected != undefined) {
      setSelected(title);
    }
  }

  function showFinished() {
    if (finished != undefined) {
      if (finished)
        return (
          <Icon path={mdiCheckCircle} className="w-8 h-8 text-primary-focus" />
        );
      else
        return (
          <Icon
            path={mdiCircleOutline}
            className="w-8 h-8 text-primary-focus"
          />
        );
    }
  }

  return (
    <Link href={link} onClick={handleClick} className={style}>
      <div className="flex flex-row items-center">
        <div className="w-7">{isSelected ? '—' : ''}</div>
        <div className="px-2">{showFinished()}</div>
        <h1>{title}</h1>
      </div>
    </Link>
  );
}
