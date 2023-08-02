'use client';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

export default function SupportButton() {
  const t = useTranslations('Button');

  return (
    <Link href="/support">
      <button className="btn btn-info btn-sm">{t('support')}</button>
    </Link>
  );
}
