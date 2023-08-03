'use client';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function LoginButton() {
  const t = useTranslations('Button');

  return (
    <Link href="/login">
      <button className="btn btn-primary btn-sm">{t('login')}</button>
    </Link>
  );
}
