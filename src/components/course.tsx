'use client'

import Link from "next/link"
import styles from "../app/courses/courses.module.css"
import Image from "next/image"


export interface CourseProps {
    title: string,
    duration: string,
    content: string,
    imgSrc: string
}

export default function Course({ID, title, duration, content, imgSrc}) {
    return (
        <li className="w-fit"> 
        <Link href={`/courses/${ID}/overview`}>
            <fieldset className="flex flex-col border-2 border-lm-rose-dark w-80 sm:w-96 h-card rounded-2xl p-6">
               <legend className="text-2xl text-center p-4">{title}</legend>
                <Image
                    src={imgSrc}
                    width={250}
                    height={200}
                    alt=""
                    className="m-auto"
                    />
                    <div className="flex items-center gap-2">
                        <Image
                        src="/images/clock.svg"
                        width={35}
                        height={35}
                        alt="clock icon" />
                        <p>{duration}</p>
                    </div>
                    <p className="">{content}</p>
            </fieldset>
        </Link>
        </li>
    )
}