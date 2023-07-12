import CourseRoadmap from "@/components/courseRoadmap";

export default function CourseOverview() {
    return (
        <div className="w-full h-full flex place-content-center">
            <div className="w-fit h-fit flex m-6">
                <CourseRoadmap></CourseRoadmap>
            </div>
        </div>
    )
}