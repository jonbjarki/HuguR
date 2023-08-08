import Icon from '@mdi/react';
import { contentUnitProps } from './contentUnit';
import ContentUnit from './contentUnit';
import Image from 'next/image';
import {
  mdiCheckCircle,
  mdiCircleOutline,
  mdiArrowDownDropCircleOutline,
} from '@mdi/js';

export interface contentSectionProps {
  title: string;
  units: Array<contentUnitProps>;
}

export default function ContentSection({ title, units }: contentSectionProps) {
  const NOT_STARTED = mdiCircleOutline;
  const IN_PROGRESS = mdiArrowDownDropCircleOutline;
  const FINISHED = mdiCheckCircle;
  let state = NOT_STARTED;
  // TODO: maybe do the progress check somewhere else?
  let finishedCount = 0;
  units.forEach((unit) => {
    if (unit.completed) finishedCount++;
  });
  if (finishedCount >= units.length) state = FINISHED;
  else if (finishedCount > 0) state = IN_PROGRESS;

  return (
    <details
      className="cursor-pointer w-full group"
      open={state == IN_PROGRESS}
    >
      <summary className="list-none w-full flex items-center justify-between p-6">
        <span className="flex items-center gap-4 text-3xl text-base-content">
          <Icon path={state} className="w-10 h-10 text-primary-focus" />
          {title}
        </span>
        <span className="transition ease-in-out group-open:rotate-180">
          <Image
            width={25}
            height={25}
            src={'/images/expand-down.svg'}
            alt=""
          />
        </span>
      </summary>
      <div className="flex flex-col items-start ml-20 gap-4">
        {units.map((unit) => (
          <ContentUnit
            key={unit.title}
            title={unit.title}
            link={unit.link}
            completed={unit.completed}
          />
        ))}
      </div>
    </details>
  );
}
