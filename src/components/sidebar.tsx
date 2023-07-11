'use client'

import ProgressBar from './progressBar';
import SidebarItem from './sidebarItem';
import { sidebarLink } from './sidebarItem';
import { useState } from 'react';


export interface sidebarProps {
    selected?: string,
    items?: Array<sidebarLink>
}

// Takes title of selected item and an array of items as props. Uses state to keep track of selected item.
export default function Sidebar({ selected, items }: sidebarProps){
    const [selectedItem, setSelected] = useState(selected);
    return (
        <div className='flex flex-col h-screen w-64 bg-lm-whitesmoke-default'>
            <div className='bg-lm-rose-default py-3 flex flex-col justify-center items-center content-center'>
                <h3 className='w-56 text-2xl text-lm-very-light drop-shadow-text shadow-lm-rose-very-dark text-center'>Stress Management</h3>
                <div className='w-full flex-row justify-center items-center'>
                    <ProgressBar progress={0.69}></ProgressBar>
                </div>
            </div>
            {/* Map items from props to actual SidebarItem components, using the item title as a key */}
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