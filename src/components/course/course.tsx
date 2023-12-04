'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';

export interface CourseProps {
  title: string;
  duration: string;
  content: string;
  imgSrc: string;
}

export default function Course({ ID, title, duration, content, imgSrc }) {
  const supabase = createClientComponentClient<Database>();

  const { data: image_url } = supabase.storage
    .from('courses')
    .getPublicUrl(imgSrc);

  return (
    <li className="w-fit">
      <Link href={`/courses/${ID}/overview`}>
        <fieldset className="flex flex-col border-2 border-lm-rose-dark w-80 sm:w-96 h-card rounded-2xl p-6">
          <legend className="text-2xl text-center p-4">{title}</legend>
          <div className="relative w-full h-2/3">
            <Image
              src={image_url.publicUrl}
              alt="Avatar"
              className="avatar image"
              fill
            />
          </div>
          <div className="flex items-center gap-2">
            <Icon
              path={mdiClockOutline}
              className="w-8 h-8 text-primary-focus"
            />
            <p>{duration} weeks</p>
          </div>
          <p className="">{content}</p>
        </fieldset>
      </Link>
    </li>
  );
}
