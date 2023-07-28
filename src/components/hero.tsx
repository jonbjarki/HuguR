'use client';

import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import HomeCover from '@/components/HomeCover';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Home');

  return (
    <ParallaxProvider>
      <div className="w-full h-96">
        <figure>
          <HomeCover />
        </figure>
        <figcaption className="-translate-y-36 text-right text-lm-light drop-shadow-text-white mr-5">
          <div className="flex flex-col w-full place-items-end">
            <h1 className="text-6xl font-bold">{t('title')}</h1>
            <p className="text-lg max-w-lg flex-wrap">{t('desc')}</p>
          </div>
        </figcaption>
      </div>
    </ParallaxProvider>
  );
}
