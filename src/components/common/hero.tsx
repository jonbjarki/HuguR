'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import HomeCover from '@/components/home/HomeCover';

export default function Hero() {
  return (
    <ParallaxProvider>
      <div className="w-full h-96">
        <figure>
          <HomeCover />
        </figure>
        <figcaption className="-translate-y-36 text-right text-lm-light drop-shadow-text-white mr-5">
          <div className="flex flex-col w-full place-items-end">
            <h1 className="text-6xl font-bold">Welcome to HuguR!</h1>
            <p className="text-lg max-w-lg flex-wrap">
              Our goal is to provide free access to mental health support and
              advice for students made by students
            </p>
          </div>
        </figcaption>
      </div>
    </ParallaxProvider>
  );
}
