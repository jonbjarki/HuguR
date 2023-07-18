import { contentUnitProps } from "./contentUnit"
import ContentUnit from "./contentUnit"
import Image from "next/image"

export interface contentSectionProps {
    title: string,
    units: Array<contentUnitProps>
}

export default function ContentSection({ title, units }: contentSectionProps) {
    const NOT_STARTED = "/images/circle.svg"
    const IN_PROGRESS = "/images/circle-arrow.svg"
    const FINISHED = "/images/circle-check.svg"
    // TODO: figure out how and where to check the not-started/in-progress/finished state
    return(
        <details className="cursor-pointer w-full group">
            <summary className="list-none w-full flex items-center justify-between p-6">
                <span className="flex items-center gap-3 text-2xl text-lm-dark">
                    <Image width={40} height={40} src={NOT_STARTED} alt="" />
                    {title}
                </span>
                <span className="transition ease-in-out group-open:rotate-180">
                    <Image width={25} height={25} src={"/images/expand-down.svg"} alt="" />
                </span>
            </summary>
            <div className="flex flex-col items-center">
                {units.map(unit => (
                    <ContentUnit
                    key={unit.title}
                    title={unit.title}
                    link={unit.link}
                    completed={unit.completed}
                    />
                ))}
            </div>
        </details>
    )
}