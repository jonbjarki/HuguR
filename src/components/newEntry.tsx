import { mdiClose, mdiArrowRight, mdiArrowLeft, mdiCheck } from "@mdi/js";
import Icon from "@mdi/react";
import { ReactNode, useState } from "react";
import { IconButton } from "./iconButton";

export enum newEntryVariants {
    Start,
    Middle,
    End,
    Single
}

export interface newEntryProps {
    title: string,
    children: ReactNode,
    onClose: React.MouseEventHandler,
    variant?: newEntryVariants
}

export function NewEntry({title, children, onClose, variant=newEntryVariants.Middle}: newEntryProps) {

    const navButtons = () => {
        switch (variant) {
            case newEntryVariants.Start:
                return (
                    <div>
                        <IconButton onClick={() => {}} iconPath={mdiArrowRight} />
                    </div>
                )
            case newEntryVariants.Middle:
                return (
                    <div>
                        <IconButton onClick={() => {}} iconPath={mdiArrowLeft} />
                        <IconButton onClick={() => {}} iconPath={mdiArrowRight} />
                    </div>
                )
            case newEntryVariants.End:
                return (
                    <div>
                        <IconButton onClick={() => {}} iconPath={mdiArrowLeft} />
                        <IconButton onClick={() => {}} iconPath={mdiCheck} />
                    </div>
                )
            case newEntryVariants.Single:
            default:
                return (
                    <div>
                        <IconButton onClick={() => {}} iconPath={mdiCheck} />
                    </div>
                )
        }
    }

    return (
        <div className="border border-base-content rounded-md p-4 m-8">
            <div className="relative w-full">
                {/* Close/cancel button */}
                <div className="absolute top-0 right-0 w-8 h-8">
                    <IconButton onClick={onClose} iconPath={mdiClose} btnSize="sm" />
                </div>
                <h1 className="font-thin tracking-widest text-2xl text-center">{title}</h1>
            </div>
            <div className="m-4 text-center">{children}</div>
            <div className="flex justify-center w-full">
                {navButtons()}
            </div>
        </div>
    )
}