'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function CompleteButton({ unit_id }: { unit_id: number }) {
  const t = useTranslations('Button');
  const supabase = createClientComponentClient();
  const router = useRouter();

  const completeUnit = async () => {
    const { data, error } = await supabase
      .from('user_unit_completion')
      .update({ completed: true })
      .eq('unit_id', unit_id);

    router.refresh();
  };

  return (
    <button className="btn btn-info btn-sm" onClick={completeUnit}>
      {t('complete')}
    </button>
  );
}
