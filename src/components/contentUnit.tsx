import Link from 'next/link';

export interface contentUnitProps {
    title: string,
    link: string,
    completed?: boolean
}

export default function ContentUnit({ title, link="/", completed=false }: contentUnitProps) {
    return(
        <div>
            <Link href={link}>{title}</Link>
        </div>
    )
}