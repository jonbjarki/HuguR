import RoadmapUnit, { roadmapUnitProps } from './roadmapUnit';

export interface courseRoadmapProps {
  units: Array<roadmapUnitProps>;
}

export default function CourseRoadmap({ units }: courseRoadmapProps) {
  // Hide the outgoing arrow on the last unit
  let lastIndex = units.length - 1;
  units[lastIndex].showArrow = false;

  // Alternate unit alignment to left and right
  for (let i = 0; i < units.length; i++) {
    const element = units[i];
    if (i - 1 >= 0) {
      element.isRight = !units[i - 1].isRight;
    }
  }

  return (
    <div className="bg-lm-whitesmoke-default rounded-3xl p-8">
      <div className="flex flex-col">
        <h1 className="text-3xl text-lm-medium-dark self-center mb-8 mt-4 tracking-widest">
          Course Roadmap
        </h1>
      </div>
      {/* Mapping happens here */}
      {units.map((unit) => (
        <RoadmapUnit
          key={unit.title}
          title={unit.title}
          content={unit.content}
          isRight={unit.isRight}
          showArrow={unit.showArrow}
        />
      ))}
    </div>
  );
}
