'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function UnitTask({ task }: { task: string }) {
  const t = useTranslations('Unit');
  const [answer, setAnswer] = useState<string>('');

  return task ? (
    <div className="flex flex-col gap-8 mt-8 w-full place-items-center">
      <div className="divider mx-auto w-4/5">{t('task')}</div>
      <p className="text-lg font-bold">{task}</p>
      <textarea
        placeholder={answer}
        className="textarea textarea-bordered border-primary textarea-md w-full max-w-md"
        onInput={(e) => {
          setAnswer(e.currentTarget.value);
        }}
      ></textarea>
      <button className="btn btn-active btn-primary">{t('save')}</button>
    </div>
  ) : null;
}
