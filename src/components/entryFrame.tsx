'use client'

import { ReactNode, useState } from "react"

export interface EntryFrameProps {
    date: string,
    children: ReactNode,
    open?: boolean
}

export function EntryFrame({ date, children, open }: EntryFrameProps) {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <div className="relative border border-lm-medium-dark rounded-lg flex flex-col place-items-center p-8 m-8">
            <div className="bg-lm-rose-light text-lm-rose-very-dark px-2 py-4 rounded-lg absolute -top-8 -left-1">
                {date}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}