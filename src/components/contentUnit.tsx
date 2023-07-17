export interface contentUnitProps {
    title: string,
    completed?: boolean
}

export default function ContentUnit({ title, completed=false }: contentUnitProps) {
    return(
        <div>{title}</div>
    )
}