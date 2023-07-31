import { ReactNode } from "react";

export interface EntryFrameProps {
    date: string,
    children: ReactNode,
}

export function EntryFrame({ date, children }: EntryFrameProps) {
    return (
        <div className="relative border border-base-300 rounded-lg flex flex-col place-items-center px-8 pt-8 m-8">
            <div className="bg-primary brightness-125 -hue-rotate-15 text-primary-content px-2 py-4 rounded-lg absolute -top-8 -left-1">
                {date}
            </div>
            <div className="flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}