'use client';

import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between px-2 py-2 text-lg">
        <NavigationLink href="/reading">Reading</NavigationLink>
        <NavigationLink href="/courses">Courses</NavigationLink>
        <NavigationLink href="/diary">Diary</NavigationLink>
      </nav>
    </div>
  );
}
