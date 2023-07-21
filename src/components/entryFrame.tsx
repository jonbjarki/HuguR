'use client'

import { ReactNode, useState } from "react"
import Image from "next/image";

export interface EntryFrameProps {
    date: string,
    children: ReactNode,
    open?: boolean
}

export function EntryFrame({ date, children, open=false }: EntryFrameProps) {
    const [isOpen, setIsOpen] = useState(open);
    
    // TODO: Probably move the open/close functionality to tool/diary entries
    // It's not worth it to have it here...
    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative border border-lm-medium-dark rounded-lg flex flex-col place-items-center px-8 pt-8 m-8">
            <div className="bg-lm-rose-light text-lm-rose-very-dark px-2 py-4 rounded-lg absolute -top-8 -left-1">
                {date}
            </div>
            <div>
                {/* First child is visible always */}
                {children[0]}
            </div>
            <div className={isOpen ? "visible" : "hidden"}>
                {/* Second child is only visible when isOpen = true */}
                {children[1]}
            </div>
            <div className={"p-8 cursor-pointer" + (isOpen ? " rotate-180" : "")} onClick={toggleOpen}>
                <Image src={"/images/expand-down.svg"} alt="" width={30} height={30} />
            </div>
        </div>
    )
}