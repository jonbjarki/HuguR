import ContentSection from "@/components/contentSection"
import { contentUnitProps } from "@/components/contentUnit"

export default function CourseContent() {

    const UNITS = Array<contentUnitProps>(
        {title: "Unit 1", completed: true},
        {title: "Unit 2", completed: true},
        {title: "Unit 3", completed: true},
        {title: "Unit 4", completed: true},
        {title: "Unit 5", completed: true}
    )

    return (
        <div>
            <ContentSection units={UNITS} />
        </div>
    )
}