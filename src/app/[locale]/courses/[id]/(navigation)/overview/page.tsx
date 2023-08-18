'use client';

import HomeCover from '@/components/home/HomeCover';
import CourseRoadmap from '@/components/course/courseRoadmap';
import { roadmapUnitProps } from '@/components/course/roadmapUnit';
import { mdiClockOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function CourseOverview({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}) {
  const supabase = createClientComponentClient();
  const { data, error } = await supabase
    .from('courses')
    .select('duration, name, description')
    .eq('id', id)
    .limit(1)
    .single();

  if (error) {
    console.log(error);
    return <div>Error loading course</div>;
  }

  // PLACEHOLDER
  // TODO: fetch roadmap descriptions from elsewhere
  const LIPSUM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris.';
  let units = Array<roadmapUnitProps>();

  for (let i = 0; i < data.duration; i++) {
    units.push({ title: 'Week ' + (i + 1), content: LIPSUM });
  }

  return (
    <div className="w-full h-full flex flex-col place-content-center">
      {/* Parallax header */}
      <div className="w-full h-auto">
        <ParallaxProvider>
          <div className="w-full h-fit relative">
            <HomeCover imageSrc="/images/stress-header.png" />
            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-center text-base-100 drop-shadow-text-white">
              {data.name}
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="flex flex-col my-3 mx-auto gap-3 items-center">
        <h1 className="text-neutral text-3xl">Course Overview</h1>
        <div className="flex flex-row items-center gap-2">
          <Icon path={mdiClockOutline} className="w-8 h-8 text-primary" />
          <h1 className="text-xl text-lm-medium-dark">
            Estimated course duration: {data.duration} weeks
          </h1>
        </div>
        <p className="text-lg text-neutral text-left w-3/4">
          {data.description}
        </p>
      </div>
      {/* Course Roadmap */}
      <div className="w-fit h-fit flex m-auto pt-6">
        <CourseRoadmap units={units}></CourseRoadmap>
      </div>
    </div>
  );
}
