'use client';

import HomeCover from '@/components/home/HomeCover';
import CourseRoadmap from '@/components/course/courseRoadmap';
import { roadmapUnitProps } from '@/components/course/roadmapUnit';
import { mdiClockOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function CourseOverview({ params }) {
  const supabase = createClientComponentClient();

  const { data } = await supabase
    .from('modules')
    .select('*, courses(name, duration, description)')
    .eq('course_id', params.id)
    .order('order_number');

  let modules = data!.map((module) => {
    return {
      title: module.name[params.locale],
      content: '', // TODO: Needs a description column in the database
    };
  });

  return (
    <div className="w-full h-full flex flex-col place-content-center">
      {/* Parallax header */}
      <div className="w-full h-auto">
        <ParallaxProvider>
          <div className="w-full h-fit relative">
            <HomeCover imageSrc="/images/stress-header.png" />
            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-center text-lm-very-light drop-shadow-text-white">
              {data![0].courses.name[params.locale]}
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="flex flex-col my-3 mx-auto gap-3 items-center">
        <h1 className="text-lm-dark text-3xl">Course Overview</h1>
        <div className="flex flex-row items-center gap-2">
          <Icon path={mdiClockOutline} className="w-8 h-8 text-primary" />
          <h1 className="text-xl text-lm-medium-dark">
            Estimated course duration: {data![0].courses.duration} weeks
          </h1>
        </div>
        <p className="text-lg text-lm-dark text-left w-3/4">
          {data![0].courses.description[params.locale]}
        </p>
      </div>
      {/* Course Roadmap */}
      <div className="w-fit h-fit flex m-auto pt-6">
        <CourseRoadmap units={modules}></CourseRoadmap>
      </div>
    </div>
  );
}
