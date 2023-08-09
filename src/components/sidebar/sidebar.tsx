'use client';

import ProgressBar from '../common/progressBar';
import SidebarItem from './sidebarItem';
import { useState } from 'react';

export interface sidebarProps {
  title: string;
  selected?: string;
  items?: Array<sidebarLink>;
  progress?: number;
}

export interface sidebarLink {
  title: string;
  link: string;
  finished?: boolean;
}

// Takes title of selected item and an array of items as props. Uses state to keep track of selected item.
export default function Sidebar({
  title,
  selected,
  items = [],
  progress,
}: sidebarProps) {
  const [selectedItem, setSelected] = useState(selected);
  function checkProgress() {
    if (progress != undefined && progress > 0) {
      if (progress > 1) return <ProgressBar progress={1}></ProgressBar>;
      else return <ProgressBar progress={progress}></ProgressBar>;
    }
  }
  return (
    <aside className="flex flex-col h-auto w-full bg-secondary">
      <div className="bg-primary py-3 flex flex-col justify-center items-center content-center">
        <h3 className="w-56 text-2xl text-base-100 drop-shadow-text shadow-primary-content text-center">
          {title}
        </h3>
        <div className="w-full flex-row justify-center items-center">
          {checkProgress()}
        </div>
      </div>
      {items.map((item) => (
        <SidebarItem
          key={item.title}
          title={item.title}
          link={item.link}
          isSelected={selectedItem == item.title}
          setSelected={setSelected}
          finished={item.finished}
        />
      ))}
    </aside>
  );
}
