'use client'

import HomeCover from "@/components/home/HomeCover";
import CourseRoadmap from "@/components/course/courseRoadmap";
import { roadmapUnitProps } from "@/components/course/roadmapUnit";
import { mdiClockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function CourseOverview() {

    // PLACEHOLDER
    // TODO: fetch data (title and content) from elsewhere
    const LIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris."
    const DESC = "Short description of course and what it entails. In this course you will lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed pharetra arcu. Phasellus posuere dictum maximus. Proin pulvinar enim ut lectus lobortis, vitae dapibus sem consequat. Praesent malesuada auctor massa eget varius. Phasellus facilisis ante id aliquam ullamcorper. Etiam vel nunc nisl. In hac habitasse platea dictumst. Nulla non laoreet elit, nec vehicula ipsum. Sed porttitor convallis purus eu placerat."
    let units = Array<roadmapUnitProps>(
        {title: "Week 1", content: LIPSUM},
        {title: "Week 2", content: LIPSUM},
        {title: "Week 3", content: LIPSUM},
        {title: "Week 4", content: LIPSUM},
        {title: "Week 5", content: LIPSUM}
    )

    return (
        <div className="w-full h-full flex flex-col place-content-center">
            {/* Parallax header */}
            <div className="w-full h-auto">
            <ParallaxProvider>
                <div className="w-full h-fit relative">
                    <HomeCover imageSrc="/images/stress-header.png" />
                    <h1 className='absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-center text-white drop-shadow-text-white'>Stress Management</h1>
                </div>
            </ParallaxProvider>
            </div>
            <div className="flex flex-col my-3 mx-auto gap-3 items-center">
                <h1 className="text-base-content text-3xl">Course Overview</h1>
                <div className="flex flex-row items-center gap-2">
                    <Icon path={mdiClockOutline} className="w-8 h-8 text-primary" />
                    {/* TODO: Fetch duration and description from database */}
                    <h1 className="text-xl text-base-content opacity-60">Estimated course duration: 5 weeks</h1>
                </div>
                <p className="text-lg text-base-content text-left w-3/4">{DESC}</p>
            </div>
            {/* Course Roadmap */}
            <div className="w-fit h-fit flex m-auto pt-6">
                <CourseRoadmap units={units}></CourseRoadmap>
            </div>
        </div>
    )
}