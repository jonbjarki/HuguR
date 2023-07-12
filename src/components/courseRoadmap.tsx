import RoadmapUnit, { roadmapUnitProps } from "./roadmapUnit"

export interface courseRoadmapProps {
    units: Array<roadmapUnitProps>
}

export default function CourseRoadmap({units}: courseRoadmapProps) {
    return(
        <div className="bg-lm-whitesmoke-default rounded-3xl p-8">
            <div className="flex flex-col">
                <h1 className="text-3xl text-lm-medium-dark self-center mb-8 mt-4 tracking-widest">Course Roadmap</h1>
            </div>
            {/* Mapping happens here */}
            {units.map(unit => (
                <RoadmapUnit 
                    key={unit.title} 
                    title={unit.title} 
                    content={unit.content} 
                    isRight={unit.isRight} 
                    showArrow={unit.showArrow} 
                />
            ))}
        </div>
    )
}