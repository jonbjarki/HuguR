import { contentUnitProps } from "./contentUnit"
import ContentUnit from "./contentUnit"

export interface contentSectionProps {
    units: Array<contentUnitProps>
}

export default function ContentSection({ units }: contentSectionProps) {
    return(
        <div>
            {units.map(unit => (
                <ContentUnit
                key={unit.title}
                title={unit.title}
                completed={unit.completed}
                />
            ))}
        </div>
    )
}