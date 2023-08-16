import { Database } from '@/lib/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { ReactElement } from 'react';

export default function MoodSelector({
  setMood,
  currentMood,
}: {
  setMood: Function;
  currentMood: string;
}) {
  const supabase = createClientComponentClient<Database>();

  const getMood = (mood: number): ReactElement => {
    const {
      data: { publicUrl },
    } = supabase.storage.from('mood').getPublicUrl(`mood-${mood}.svg`);

    return (
      <div key={mood}>
        <input
          onClick={() => setMood(mood)}
          type="radio"
          id={`mood-${mood}`}
          name="mood"
          value={mood}
          defaultChecked={mood === parseInt(currentMood)}
          className="hidden peer"
        />
        <label
          htmlFor={`mood-${mood}`}
          className="ml-2 hover:opacity-70 peer-checked:[&>*:first-child]:border-4 h-[50px] w-[50px]"
        >
          <Image
            src={publicUrl}
            width={50}
            height={50}
            alt="mood indicator"
            className="border-primary rounded-full"
            loading="eager"
          />
        </label>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center my-4">
      <p className="mb-4 flex flex-col">
        How did the circumstances make you feel?
        <span className="text-red-500">* required</span>
      </p>
      {/* Input with a scale from 1 to 5 with each scale represented by an emoji */}
      <div className="flex flex-row justify-center items-center mb-4">
        <div className="flex flex-row items-center gap-1 self-center h-fit">
          {[1, 2, 3, 4, 5].map((mood) => getMood(mood))}
        </div>
      </div>
    </div>
  );
}
