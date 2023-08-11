'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useTranslations } from 'next-intl';
import UnitTask from '@/components/unit/UnitTask';

interface Unit {
  title: string;
  translation_key: string;
}

export default function UnitPage({
  params,
}: {
  params: { id: string; unit: string };
}) {
  const supabase = createClientComponentClient();
  const t = useTranslations('Units');

  const [unit, setUnits] = useState<Unit | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchUnits() {
      const { data, error } = await supabase
        .from('units')
        .select('title, translation_key')
        .eq('course_id', params.id)
        .eq('id', params.unit)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setUnits(data as Unit);
      }
    }

    fetchUnits().then();
  }, [params.id, params.unit, supabase]);

  return (
    <div className="flex w-screen h-full justify-center">
      {error && (
        <div className="flex flex-col">
          <h1>There was an error 😞</h1>
          <p>{error}</p>
        </div>
      )}
      {unit && (
        <div className="flex flex-col gap-8 mt-8 w-full place-items-center">
          <h1 className="text-3xl font-bold">{unit.title}</h1>
          <h2 className="text-xl font-semibold">
            {t(`${unit.translation_key}.title`)}
          </h2>
          <p>{t(`${unit.translation_key}.content`)}</p>
          {/* {unit.content.map((content, idx) => (
            <UnitContentSection key={idx} content={content} />
          ))} */}
          <UnitTask task={t(`${unit.translation_key}.task`)} />
          <button className="btn btn-active btn-primary">Áfram</button>
        </div>
      )}
    </div>
  );
}
