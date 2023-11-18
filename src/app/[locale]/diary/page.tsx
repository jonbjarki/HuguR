import DiaryCard from '@/components/diary/DiaryCard';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import DiarySidebar from '@/components/diary/DiarySidebar';
import DiaryList from '@/components/diary/DiaryList';
import { Database } from '@/lib/database.types';

export default async function Diary() {
  // Require User to be logged in
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // ! BUG: The redirect doesn't account for locales
  if (!session) redirect('/login');

  // Fetches diary entries from database
  const { data, error } = await supabase
    .from('diary')
    .select('*,emotions (name, intensity),symptoms (name)')
    .order('date', { ascending: false });

  if (error) {
    console.error(error);
    return <div>Error loading diary</div>;
  }

  const emotionsOptions = (
    await supabase.from('emotions_options').select('name')
  ).data?.map((e) => e.name) as string[];

  const symptomsOptions = (
    await supabase.from('symptoms_options').select('name')
  ).data?.map((s) => s.name) as string[];

  return (
    // <div className="flex min-h-screen flex-row">
    <div className="grid place-items-center">
      {/* Diary Sidebar */}
      {/* <DiarySidebar /> */}
      <div className="grid place-items-center">
        <main className="mb-20">
          <h1 className="text-3xl m-10 font-medium text-center">Diary</h1>
          <DiaryList
            entries={data}
            symptomsOptions={symptomsOptions}
            emotionsOptions={emotionsOptions}
          />
        </main>
      </div>
    </div>
  );
}
