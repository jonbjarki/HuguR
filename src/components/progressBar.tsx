export default function ProgressBar({ progress }) {
    const percentage = progress * 100;
    return (
        <div className="flex flex-row m-3 items-center">
            <div className="text-lm-rose-very-dark flex text-sm w-10">{percentage + "%"}</div>
            <div className="flex w-full ml-2 h-4 relative">
                <div style={{width: percentage + "%"}} className=" bg-lm-very-light h-full flex flex-nowrap rounded-lg z-50 absolute top-0"></div>
                <div className="w-full bg-lm-rose-dark h-full flex flex-nowrap rounded-lg shrink z-10 absolute top-0"></div>
            </div>
        </div>
    )
}