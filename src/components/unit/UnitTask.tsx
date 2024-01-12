/**
 * @deprecated This component is not used anymore
 */
'use client';

import { useState } from 'react';

export default function UnitTask({ task }: { task: string }) {
  const [answer, setAnswer] = useState<string>('');

  return task ? (
    <div className="flex flex-col gap-8 mt-8 w-full place-items-center">
      <div className="divider mx-auto w-4/5">Task</div>
      <p className="text-lg font-bold">{task}</p>
      <textarea
        placeholder={answer}
        className="textarea textarea-bordered border-primary textarea-md w-full max-w-md"
        onInput={(e) => {
          setAnswer(e.currentTarget.value);
        }}
      ></textarea>
      <button className="btn btn-active btn-primary">Save</button>
    </div>
  ) : null;
}
