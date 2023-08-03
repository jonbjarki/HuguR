import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Error from 'next/error';

export default async function ViewEntry({
  params,
}: {
  params: { id: number };
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Error statusCode={401} />;
  }

  const { data, error } = await supabase
    .from('diary')
    .select('*')
    .eq('id', params.id)
    .eq('user_id', user?.id)
    .single();

  if (error) {
    console.log(error);
    return <div>Error loading article</div>;
  }
  console.log(data);
}
