'use client';

import { ParallaxBanner } from 'react-scroll-parallax';

export default function HomeCover({ imageSrc = '/images/homeheader2.png' }) {
  return (
    <ParallaxBanner
      layers={[{ image: imageSrc, speed: -30 }]}
      className="max-h-96 w-full object-cover object-center aspect-[2/1]"
    />
  );
}
