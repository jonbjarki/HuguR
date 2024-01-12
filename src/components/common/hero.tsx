/**
 * Home Page Header component
 * Displays a cover image with a parallax effect and a welcome message
 */
'use client';

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <ParallaxProvider>
      <div className="w-full h-96">
        <figure>
          <ParallaxBanner
            layers={[{ image: '/images/homeheader2.png', speed: -30 }]}
            className="max-h-96 w-full object-cover object-center aspect-[2/1]"
          />
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
