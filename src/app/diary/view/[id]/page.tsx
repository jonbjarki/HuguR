import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import { cookies } from 'next/headers';
import Error from 'next/error';

export default async function ViewEntry({
  params,
}: {
  params: { id: number };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>You are not authorized!</div>
  }

  const { data, error } = await supabase.from('diary')
  .select(`
    *,
    emotion (name),
    symptoms (name)`
    ).eq('id', params.id).eq('user_id', user?.id);

  if (error) {
    console.log(error);
    return <div>Error loading article</div>;
  }
  console.log(data);
}
