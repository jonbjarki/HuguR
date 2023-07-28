'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      <select
        className="select select-primary select-sm w-full max-w-xs"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option key={'is'} value={'is'}>
          IS
        </option>
        <option key={'en'} value={'en'}>
          EN
        </option>
      </select>
    </label>
  );
}
