import DiaryCard from '@/components/diary/DiaryCard';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Diary() {

  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  const { data, error } = await supabase.from('diary')
  .select('*').eq('user_id', user?.id);

  if (error) {
    console.error(error);
    return <div>Error loading diary</div>;
  }
  if (data.length === 0) {
    return <div>You have no diary entries</div>;
  }

  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl m-10 font-medium text-center">Diary</h1>
      <DiaryCard
        id={1}
        date="01/08/2023"
        mood="5"
        emotions={[
          { emotion: 'Happy', intensity: 5 },
          { emotion: 'Sad', intensity: 7 },
        ]}
        circumstance="Listening to sad music"
      />
    </div>
  );
}
