import { Goal } from '@/components/goal';
import { Info } from '@/components/info';
import React from 'react';

export default function CourseGoals() {
  // add 'how many times a week would you like to do this?' to new goal window
  const tooltipText = 'Here you can set goals that you hope to achieve during this course, and log your progress towards them for the week. Remember to keep your goals achievable and measurable!'
  
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='relative m-10'>
        <h1 className='text-2xl text-base-content opacity-60'>My goals</h1>
        <div className='absolute top-0 lg:-right-60 md:-right-52 sm:-right-32'>
          <Info text={tooltipText} />
        </div>
      </div>
      <div className='w-2/3 flex flex-col gap-8'>
        <Goal title='test' frequency={7} />
        <Goal title='test2' frequency={5} />
      </div>
    </div>
  )
}
