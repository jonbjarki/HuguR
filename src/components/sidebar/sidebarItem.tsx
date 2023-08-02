'use client'
import Link from 'next/link';

// The title of the link in the sidebar, and where it leads to.
export interface sidebarLink {
    title: string,
    link: string
}

export interface SidebarItemProps {
    link: sidebarLink,
    isSelected?: boolean,
    setSelected?: any
}

export default function SidebarItem({link, isSelected=false, setSelected}: SidebarItemProps){
    const selectedSettings = isSelected ? 'bg-secondary-focus font-bold' : '';

    // Highlight selected item
    function handleClick() {
        if (setSelected != undefined) {
            setSelected(link.title);
        }
    }

    return (
        <Link href={link.link} onClick={handleClick} className={'py-3 hover:bg-secondary-focus flex flex-row text-lg text-secondary-content ' + selectedSettings}>
            <div className='w-7'>{isSelected ? '—' : ''}</div>
            <h1>{link.title}</h1>
        </Link>
    )
}