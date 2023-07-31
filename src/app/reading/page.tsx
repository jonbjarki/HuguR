import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

export default async function Reading() {
  // Fetch title, description, id and image path of articles from superbase database
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from('articles')
    .select('title, description, id, image');

  if (error) {
    console.log(error);
    return <div>Error loading articles</div>
  }
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-6">Reading</h1>
      <main className="w-11/12 lg:w-10/12 m-auto">
        <ul className="flex flex-col gap-8">
          {data.map((article) => (
            <li key={article.id}>
              <ArticleCard
                title={article.title}
                description={article.description}
                id={article.id}
                image={article.image}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
