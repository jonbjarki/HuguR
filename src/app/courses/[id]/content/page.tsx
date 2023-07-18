import ContentSection from "@/components/contentSection"
import { contentUnitProps } from "@/components/contentUnit"

export default function CourseContent() {

    const UNITS = Array<contentUnitProps>(
        {title: "Unit 1", link:"/", completed: true},
        {title: "Unit 2", link:"/", completed: true},
        {title: "Unit 3", link:"/", completed: true},
        {title: "Unit 4", link:"/", completed: true},
        {title: "Unit 5", link:"/", completed: true}
    )

    return (
        <div className="h-full w-2/3 flex flex-col items-center mx-auto">
            <h1 className="text-lm-medium-dark text-4xl my-8">Modules</h1>
            <ContentSection title="Week 1" units={UNITS} />
            <ContentSection title="Week 2" units={UNITS} />
            <ContentSection title="Week 3" units={UNITS} />
        </div>
    )
}