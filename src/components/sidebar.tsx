'use client'

import SidebarItem from './sidebarItem';
import { sidebarLink } from './sidebarItem';
import { useState } from 'react';


export interface sidebarProps {
    selected?: string,
    items?: Array<sidebarLink>
}

export default function Sidebar({ selected, items }: sidebarProps){
    const [selectedItem, setSelected] = useState(selected);
    return (
        <div className='flex flex-col h-screen w-64 bg-lm-whitesmoke-default'>
            <div className='bg-lm-rose-default py-3 flex content-center justify-center'>
                <h3 className='w-56 text-2xl text-lm-very-light drop-shadow-text shadow-lm-rose-very-dark flex text-center'>Stress Management</h3>
            </div>
            {items.map(item => (
                <SidebarItem 
                key={item.title} 
                link={item} 
                isSelected={selectedItem == item.title}
                setSelected={setSelected}
                ></SidebarItem>
            ))}
        </div>
    )
}