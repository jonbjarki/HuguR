'use client'

import HomeCover from "@/components/HomeCover";
import CourseRoadmap from "@/components/courseRoadmap";
import { roadmapUnitProps } from "@/components/roadmapUnit";
import { ParallaxProvider } from "react-scroll-parallax";

export default function CourseOverview() {

    // PLACEHOLDER
    // TODO: fetch data (title and content) from elsewhere
    const LIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris."
    let units = Array<roadmapUnitProps>(
        {title: "Week 1", content: LIPSUM},
        {title: "Week 2", content: LIPSUM},
        {title: "Week 3", content: LIPSUM},
        {title: "Week 4", content: LIPSUM},
        {title: "Week 5", content: LIPSUM}
    )

    return (
        <div className="w-full h-full flex flex-col place-content-center">
            <div className="w-full h-auto">
            <ParallaxProvider>
                <div className="w-full h-fit relative">
                    <HomeCover imageSrc="/images/stress-header.png" />
                    <h1 className='absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-center text-lm-very-light drop-shadow-text-white'>Stress Management</h1>
                </div>
            </ParallaxProvider>
            </div>
            <div className="w-fit h-fit flex m-auto pt-6">
                <CourseRoadmap units={units}></CourseRoadmap>
            </div>
        </div>
    )
}