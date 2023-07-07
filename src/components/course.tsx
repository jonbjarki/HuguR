'use client'

import styles from "../app/courses/courses.module.css"
import Image from "next/image"


export interface CourseProps {
    title: string,
    duration: string,
    content: string,
    imgSrc: string
}

export default function Course({title, duration, content, imgSrc}) {
    return (
        <li className={styles.course}>
            <fieldset>
               <legend className={styles.courseTitle}>{title}</legend>
                <Image
                    src={imgSrc}
                    width={250}
                    height={200}
                    alt="" />
                <div>
                    <Image
                    src="/images/clock.svg"
                    width={35}
                    height={35}
                    alt="clock icon" />
                    <p>{duration}</p>
                </div>
                <p>{content}</p>

            </fieldset>
        </li>
    )
}