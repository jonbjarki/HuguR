import Link from "next/link";
import classNames from "classnames";

export default function UnitNavButtons({nextUrl, prevUrl}: {nextUrl?: string, prevUrl?: string}) {
    const nextBtnClass = classNames({"btn btn-primary text-center": true, "btn-disabled": !nextUrl});
    const prevBtnClass = classNames({"btn btn-primary text-center": true, "btn-disabled": !prevUrl});

    return (
        <div className="flex justify-center gap-4 mt-2">
            <Link className={prevBtnClass} href={prevUrl ? prevUrl : "."}>
            Prev
        </Link>
        
        <Link className={nextBtnClass} href={nextUrl ? nextUrl : "."}>
            Next
        </Link>

        </div>
    )
}