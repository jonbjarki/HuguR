'use client';

import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import HomeCover from '@/components/HomeCover';

export default function Hero({ name = '' }) {
  return (
    <ParallaxProvider>
      <div className="w-full h-96">
        <figure>
          <HomeCover />
        </figure>
        <figcaption className="-translate-y-36 text-right text-lm-light drop-shadow-text-white mr-5">
          <h1 className="text-6xl font-bold">Welcome to HuguR {name}!</h1>
          <p className="text-lg">
            our goal is to provide free access to mental health support and
            advice
            <br /> for students made by students
          </p>
        </figcaption>
      </div>
    </ParallaxProvider>
  );
}
