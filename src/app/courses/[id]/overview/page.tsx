import CourseRoadmap from "@/components/courseRoadmap";
import { roadmapUnitProps } from "@/components/roadmapUnit";

export default function CourseOverview() {

    // PLACEHOLDER
    // TODO: fetch data (title and content) from elsewhere
    const LIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris."
    let units = Array<roadmapUnitProps>(
        {title: "Week 1", content: LIPSUM, isRight: false, showArrow: true},
        {title: "Week 2", content: LIPSUM, isRight: false, showArrow: true},
        {title: "Week 3", content: LIPSUM, isRight: false, showArrow: true},
        {title: "Week 4", content: LIPSUM, isRight: false, showArrow: true},
        {title: "Week 5", content: LIPSUM, isRight: false, showArrow: true}
    )

    // Hide the outgoing arrow on the last unit
    let lastIndex = units.length - 1;
    units[lastIndex].showArrow = false;

    // Alternate unit alignment to left and right
    for (let i = 0; i < units.length; i++) {
        const element = units[i];
        if (i - 1 >= 0) {
            element.isRight = !(units[i-1].isRight)
        }
    }

    return (
        <div className="w-full h-full flex place-content-center">
            <div className="w-fit h-fit flex m-6">
                <CourseRoadmap units={units}></CourseRoadmap>
            </div>
        </div>
    )
}