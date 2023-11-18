import Image from 'next/image';

export interface roadmapUnitProps {
  title: string;
  content: string;
  isRight?: boolean;
  showArrow?: boolean;
}

export default function RoadmapUnit({
  title = 'Week 1 - Title',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et neque finibus pretium sed ac mauris.',
  isRight = false,
  showArrow = true,
}: roadmapUnitProps) {
  const arrowDirection = isRight ? ' -scale-x-100 order-1' : ' order-3';
  const arrowVisibility = showArrow ? '' : ' opacity-0';
  const arrowStyle =
    'self-end mt-10 w-1/2 h-auto z-10 pr-10' + arrowDirection + arrowVisibility;

  return (
    <div className="relative flex flex-row w-full h-fit">
      <div className="bg-primary mb-10 h-fit w-1/2 order-2 rounded-2xl p-2 drop-shadow-[10px_10px_0px_rgba(244,220,208,1)]">
        <h1 className="text-base-100 text-3xl">{title}</h1>
        <div className="text-primary-content text-lg p-2">{content}</div>
      </div>
      <svg
        viewBox="0 0 274 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={arrowStyle}
      >
        <path
          d="M205 3.00004L205 0.50004L205 3.00004ZM255 53L252.5 53L252.5 53L255 53ZM253.232 156.768C254.208 157.744 255.791 157.744 256.768 156.768L272.678 140.858C273.654 139.882 273.654 138.299 272.678 137.323C271.701 136.346 270.118 136.346 269.142 137.323L255 151.465L240.858 137.323C239.881 136.346 238.299 136.346 237.322 137.323C236.346 138.299 236.346 139.882 237.322 140.858L253.232 156.768ZM-6.31287e-05 5.50021L205 5.50004L205 0.50004L-7.46543e-05 0.500223L-6.31287e-05 5.50021ZM252.5 53L252.5 155L257.5 155L257.5 53L252.5 53ZM205 5.50004C231.233 5.50002 252.5 26.7665 252.5 53L257.5 53C257.5 24.0051 233.995 0.500022 205 0.50004L205 5.50004Z"
          fill="#7D5845"
        />
      </svg>
    </div>
  );
}
