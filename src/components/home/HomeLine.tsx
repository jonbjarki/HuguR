'use client'

import Bubble from "./bubble"
import Image from "next/image"

import { BubbleProps } from "./bubble"


interface HomeLineProps extends BubbleProps {
    imgSrc: string
}

export default function HomeLine({title, content, btnLink, btnText, imgSrc, isRight }: HomeLineProps) {

    const lineSettings = isRight ? " flex-row-reverse" : " flex-row"

    return (
        <div className={"text-center sm:text-left md:flex md:flex-nowrap sm:m-0 md:m-6" + lineSettings}>
        <Bubble title={title} content={content} isRight={isRight} btnLink={btnLink} btnText={btnText}/>

        <Image
          src={imgSrc}
          width={379}
          height={294}
          alt=''
          className="hidden md:block"
          />
      </div>
    )
}