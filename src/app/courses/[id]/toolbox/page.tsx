import { EntryFrame } from "@/components/entryFrame";
import { Tool } from "@/components/tool";

export default function CourseToolbox() {
    let day = new Date(); // Placeholder
    return (
        <div className="w-2/3">
            <div>
                <Tool title="Don't be sad" description="Just don't do it. Why would you be sad? Idiot" date={day.toLocaleDateString()} />
            </div>
        </div>
    )
}