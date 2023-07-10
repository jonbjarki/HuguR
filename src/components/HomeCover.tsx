'use client'

import Image from "next/image"
import homeHeader from "/public/images/homeheader2.png"
import { useParallax, useParallaxController, ParallaxBanner } from 'react-scroll-parallax'


export default function HomeCover() {
  //const parallax = useParallax<HTMLImageElement>({  })

    return (
    <ParallaxBanner
        layers={[{ image: "/images/homeheader2.png", speed: -30 }]}
        className='max-h-96 w-full object-cover object-center aspect-[2/1]'
        />
        )
} 