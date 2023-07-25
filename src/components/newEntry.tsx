import { ReactNode, useState } from "react";

export interface newEntryProps {
    title: string,
    children: ReactNode,
    next?: ReactNode,
    prev?: ReactNode
}

export function NewEntry({title, children, next, prev}: newEntryProps) {
    return (
        <div className="border border-base-content rounded-md p-4 m-6">
            <div className="relative w-full">
                <button className="btn btn-primary btn-circle btn-outline btn-sm border-2 absolute top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className="font-thin tracking-widest text-2xl text-center">{title}</h1>
            </div>
            <div className="m-4">{children}</div>
        </div>
    )
}