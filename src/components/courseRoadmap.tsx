import RoadmapUnit from "./roadmapUnit"

export default function CourseRoadmap() {
    return(
        <div className="bg-lm-whitesmoke-default rounded-3xl p-8">
            <div className="flex flex-col">
                <h1 className="text-3xl text-lm-medium-dark self-center mb-8 mt-4 tracking-widest">Course Roadmap</h1>
                <RoadmapUnit></RoadmapUnit>
                <RoadmapUnit isRight={true}></RoadmapUnit>
                <RoadmapUnit showArrow={false}></RoadmapUnit>
            </div>
        </div>
    )
}