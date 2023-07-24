import { ReactNode } from "react";

export interface EntryFrameProps {
    date: string,
    children: ReactNode,
}

export function EntryFrame({ date, children }: EntryFrameProps) {
    return (
        <div className="relative border border-lm-medium-dark rounded-lg flex flex-col place-items-center px-8 pt-8 m-8">
            <div className="bg-lm-rose-light text-lm-rose-very-dark px-2 py-4 rounded-lg absolute -top-8 -left-1">
                {date}
            </div>
            <div className="flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}