'use client';

import CourseRoadmap from '@/components/course/courseRoadmap';
import { roadmapUnitProps } from '@/components/course/roadmapUnit';
import { mdiClockOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function CourseOverview({ params }) {
  const supabase = createClientComponentClient();

  // const { data } = await supabase
  //   .from('modules')
  //   .select('*, courses(name, duration, description)')
  //   .eq('course_id', params.id)
  //   .order('order_number');

  // let modules = data!.map((module) => {
  //   return {
  //     title: module.name,
  //     content: '', // TODO: Needs a description column in the database
  //   };
  // });
  let modules = [
    { title: 'Module 1', content: 'placeholder' },
    { title: 'Module 2', content: 'placeholder' },
    { title: 'Module 3', content: 'placeholder' },
  ];
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', params.id)
    .single();
  const course = data;

  return (
    <div className="w-full h-full flex flex-col place-content-center">
      {/* Parallax header */}
      <div className="w-full h-auto">
        <ParallaxProvider>
          <div className="w-full h-fit relative">
            <ParallaxBanner
              layers={[{ image: '/images/homeheader2.png', speed: -30 }]}
              className="max-h-96 w-full object-cover object-center aspect-[2/1]"
            />
            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-center text-base-100 drop-shadow-text-white">
              {course.name}
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="flex flex-col my-3 mx-auto gap-3 items-center">
        <h1 className="text-neutral text-3xl">Course Overview</h1>
        <div className="flex flex-row items-center gap-2">
          <Icon path={mdiClockOutline} className="w-8 h-8 text-primary" />
          <h1 className="text-xl text-lm-medium-dark">
            Estimated course duration: {course.duration} weeks
          </h1>
        </div>
        <p className="text-lg text-neutral text-left w-3/4">
          {course.description}
        </p>
      </div>
      {/* Course Roadmap */}
      <div className="w-fit h-fit flex m-auto pt-6">
        <CourseRoadmap units={modules}></CourseRoadmap>
      </div>
    </div>
  );
}
