import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function ArticleSidebar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.from('articles').select('title, id');

  if (error) {
    console.log(error);
    return;
  }

  return (
    <aside className="sticky w-60 top-0 left-0 -translate-x-full transform bg-white transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
      <div className="w-full border-b-4 pb-7 mt-6 h-12 border-indigo-100 text-center">
        <span className="font-mono text-lg font-bold tracking-widest">
          Quick Navigation
        </span>
      </div>
      <nav className="flex flex-col">
        {data.map((article) => (
            <Link key={article.id} className='w-full h-full min-h-16 pl-4 text-lg flex items-center  hover:bg-lm-light' prefetch href={`/reading/${article.id}`}>{article.title}</Link>
        ))}
      </nav>
    </aside>
  );
}
