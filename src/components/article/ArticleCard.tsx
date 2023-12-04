'use client';

import Image from 'next/image';
import Link from 'next/link';
type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  id: number;
};

export default function ArticleCard({
  title,
  description,
  id,
  image,
}: ArticleCardProps) {
  return (
    <div className="hover:bg-opacity-80 card card-side card-bordered bg-base-100 shadow-xl max-w-screen-2xl m-auto">
      <figure>
        <Image
          src={image}
          alt="Article Image"
          width={1200}
          height={600}
          className="h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`/reading/${id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
