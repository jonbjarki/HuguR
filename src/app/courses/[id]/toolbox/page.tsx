import { EntryFrame } from "@/components/entryFrame";

export default function CourseToolbox() {
    let day = new Date(); // Placeholder
    return (
        <div>
            <EntryFrame date={day.toLocaleDateString()}>
                blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </EntryFrame>
        </div>
    )
}