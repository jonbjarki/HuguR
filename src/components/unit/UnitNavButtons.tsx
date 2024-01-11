/**
 * Renders the navigation next and prev buttons for the units.
 * @param nextUrl - The URL linking to the next page in the unit
 * @param prevUrl - The URL linking to the previous page in the unit
 * @returns The rendered navigation buttons component.
 */

import classNames from "classnames";
import Link from "next/link";

export default function UnitNavButtons({nextUrl, prevUrl}: {nextUrl?: string, prevUrl?: string}) {
    const nextBtnClass = classNames({"btn btn-primary text-center": true, "btn-disabled": !nextUrl});
    const prevBtnClass = classNames({"btn btn-primary text-center": true, "btn-disabled": !prevUrl});

    return (
        <div className="flex justify-center gap-4 mt-6">
            <Link className={prevBtnClass} href={prevUrl ? prevUrl : "."}>
                Prev
            </Link>
        
            <Link className={nextBtnClass} href={nextUrl ? nextUrl : "."}>
                Next
            </Link>
        </div>
    )
}