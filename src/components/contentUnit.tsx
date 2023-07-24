import Link from 'next/link';
import Image from 'next/image';

export interface contentUnitProps {
    title: string,
    link: string,
    completed?: boolean
}

export default function ContentUnit({ title, link="/", completed=false }: contentUnitProps) {
    const icon = completed ? "/images/circle-check.svg" : "/images/circle.svg";
    return(
        <div className="text-xl text-base-content text-left flex items-center gap-8">
            <Image src={icon} alt="" width={40} height={40} />
            <Link href={link}>{title}</Link>
        </div>
    )
}