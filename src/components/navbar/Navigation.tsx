'use client';

import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between px-2 py-2 text-lg">
        <NavigationLink href="/reading">{t('reading')}</NavigationLink>
        <NavigationLink href="/courses">{t('courses')}</NavigationLink>
        <NavigationLink href="/exercises">{t('exercises')}</NavigationLink>
        <NavigationLink href="/diary">{t('diary')}</NavigationLink>
      </nav>
    </div>
  );
}
