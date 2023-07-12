import Image from "next/image"

export default function RoadmapUnit({
        title="Week 1 - Title", 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris.", 
        isRight=false, 
        showArrow=true
    }) {
        
    const arrowDirection = isRight ? " -scale-x-100 order-1 ml-44" : " order-3";
    const arrowVisibility = showArrow ? "" : " opacity-0";

    return(
        <div className="flex flex-row w-full h-fit">
            <div className="bg-lm-rose-default h-48 w-96 order-2 rounded-2xl p-2 drop-shadow-[10px_10px_0px_rgba(244,220,208,1)]">
                <h1 className="text-lm-very-light text-3xl">{title}</h1>
                <div className="text-lm-dark text-lg p-2">{content}</div>
            </div>
            <Image 
                src="/images/roadmap-arrow.svg" 
                alt="Arrow" 
                width={300} 
                height={130} 
                className={"z-10 pt-24" + arrowDirection + arrowVisibility} 
            />
        </div>
    )
}