import DiaryCard from '@/components/diary/DiaryCard';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import DiarySidebar from '@/components/diary/DiarySidebar';

export default async function Diary() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/login');

  const { data, error } = await supabase
    .from('diary')
    .select('*,emotion (name, intensity),symptoms (name)')
    .eq('user_id', user?.id);

  if (error) {
    console.error(error);
    return <div>Error loading diary</div>;
  }
  if (data.length === 0) {
    return <div>You have no diary entries</div>;
  }
  // print all symptoms and emotions for each entry in data
  data.forEach((entry) => {
    console.log(entry.emotion);
    console.log(entry.symptoms);
  });
  return (
    <div className="flex min-h-screen flex-row">
      {/* Diary Sidebar */}
      <DiarySidebar />
      <div className="grid place-items-center">
        <main className="mb-20">
          <h1 className="text-3xl m-10 font-medium text-center">Diary</h1>
          <ul>
            {data.map((entry) => (
              <li key={entry.id}>
                <DiaryCard
                  id={entry.id}
                  date={entry.created_at}
                  mood={entry.mood}
                  emotions={entry.emotion}
                  circumstance={entry.circumstance}
                  symptoms={entry.symptoms}
                  thoughts={entry.thoughts}
                  reassessment={entry.reassessment}
                  coping_strategies={entry.coping_strategies}
                  behaviour={entry.behaviour}
                />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
