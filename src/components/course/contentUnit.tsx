import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCircleOutline } from '@mdi/js';

export interface contentUnitProps {
    title: string,
    link: string,
    completed?: boolean
}

export default function ContentUnit({ title, link="/", completed=false }: contentUnitProps) {
    const icon = completed ? mdiCheckCircle : mdiCircleOutline;
    return(
        <div className="text-xl text-base-content text-left flex items-center gap-8">
            <Icon path={icon} className="w-10 h-10 text-primary-focus" />
            <Link href={link}>{title}</Link>
        </div>
    )
}