import DiaryCard from '@/components/diary/DiaryCard';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import DiarySidebar from '@/components/diary/DiarySidebar';
import DiaryList from '@/components/diary/DiaryList';

export default async function Diary() {
  // Require User to be logged in
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect('/login');

  // Fetches diary entries from database
  const { data, error } = await supabase
    .from('diary')
    .select('*,emotion (name, intensity),symptoms (name)');

  if (error) {
    console.error(error);
    return <div>Error loading diary</div>;
  }
  if (data.length === 0) {
    return <div>You have no diary entries</div>;
  }

  return (
    // <div className="flex min-h-screen flex-row">
    <div className="grid place-items-center">
      {/* Diary Sidebar */}
      {/* <DiarySidebar /> */}
      <div className="grid place-items-center">
        <main className="mb-20">
          <h1 className="text-3xl m-10 font-medium text-center">Diary</h1>
          <DiaryList entries={data} />
        </main>
      </div>
    </div>
  );
}
