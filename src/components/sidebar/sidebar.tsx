'use client'

import ProgressBar from '../progressBar';
import SidebarItem from './sidebarItem';
import { sidebarLink } from './sidebarItem';
import { useState } from 'react';


export interface sidebarProps {
    selected?: string,
    items?: Array<sidebarLink>
}

// Takes title of selected item and an array of items as props. Uses state to keep track of selected item.
export default function Sidebar({ selected, items=[] }: sidebarProps){
    const [selectedItem, setSelected] = useState(selected);
    return (
        <aside className='flex flex-col h-auto w-full bg-secondary'>
            <div className='bg-primary py-3 flex flex-col justify-center items-center content-center'>
                <h3 className='w-56 text-2xl text-base-100 drop-shadow-text shadow-primary-content text-center'>Stress Management</h3>
                <div className='w-full flex-row justify-center items-center'>
                    {/* TODO: useContext from react to get progress */}
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
        </aside>
    )
}