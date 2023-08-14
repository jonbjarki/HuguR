import Icon from '@mdi/react';
import { contentUnitProps } from './contentUnit';
import ContentUnit from './contentUnit';
import Image from 'next/image';
import {
  mdiCheckCircle,
  mdiCircleOutline,
  mdiArrowDownDropCircleOutline,
} from '@mdi/js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export interface contentSectionProps {
  name: string;
  units: Array<contentUnitProps>;
  params: { id: string; locale: string };
}

const NOT_STARTED = mdiCircleOutline;
const IN_PROGRESS = mdiArrowDownDropCircleOutline;
const FINISHED = mdiCheckCircle;

export default async function ContentSection({
  name,
  units,
  params,
}: contentSectionProps) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();
  let state = NOT_STARTED;

  // if (data.session) {
  //   const finished = units.every((unit) => {
  //     return unit.user_unit_completion?.[0].completed;
  //   });

  //   const started = units.some((unit) => {
  //     return unit.user_unit_completion?.[0].completed;
  //   });

  //   if (units.length > 0 && finished) state = FINISHED;
  //   else if (started) state = IN_PROGRESS;
  //   else state = NOT_STARTED;
  // }

  return (
    <details
      className="cursor-pointer w-full group"
      open={state == IN_PROGRESS}
    >
      <summary className="list-none w-full flex items-center justify-between p-6">
        <span className="flex items-center gap-4 text-3xl text-base-content">
          <Icon path={state} className="w-10 h-10 text-primary-focus" />
          {name}
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
            key={unit.id}
            name={unit.name[params.locale]}
            link={`/courses/${params.id}/${unit.id}`}
            // completed={
            //   unit.user_unit_completion
            //     ? unit.user_unit_completion[0].completed
            //     : false
            // }
          />
        ))}
      </div>
    </details>
  );
}
