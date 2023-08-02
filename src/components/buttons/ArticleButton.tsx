'use client';

import Link from 'next-intl/link';

export function ArticleButton(article: { title: any; id: any }) {
  return (
    <Link
      className="w-full h-full min-h-16 pl-4 text-lg flex items-center  hover:bg-lm-light"
      prefetch
      href={`/reading/${article.id}`}
    >
      {article.title}
    </Link>
  );
}
