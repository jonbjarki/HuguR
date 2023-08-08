'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type Emotion = { name: string; intensity: number };
type Symptom = { name: string };
interface DiaryCardProps {
  id: number;
  mood: string;
  date: string;
  circumstance: string;
  emotions?: Emotion[];
  symptoms?: Symptom[];
  thoughts?: string;
  reassessment?: string;
  coping_strategies?: string;
  behaviour?: string;
}

export default function DiaryCard({
  mood,
  date,
  emotions,
  circumstance,
  thoughts,
  symptoms,
  reassessment,
  coping_strategies,
  behaviour,
}: DiaryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const options = isExpanded ? 'flex-col' : 'flex-row';

  return (
    <div className="indicator border border-black rounded-lg">
      <div className="flex flex-col">
        <div>
          <span className="indicator-item indicator-start badge bg-lm-rose-light py-5 px-2 rounded-lg">
            {date}
          </span>
          <div className="p-4 flex flex-row flex-nowrap gap-10 m-6 items-start">
            <div className={'flex gap-6 ' + options}>
              <figure className="relative w-16 h-16 self-center">
                <Image
                  src={`/images/mood/mood-${mood}.svg`}
                  fill
                  alt="Image depicting mood"
                />
              </figure>
              <div>
                <p className="text-center text-xl text-primary-focus mb-2">
                  Emotions
                </p>
                <ul className="flex flex-col gap-1">
                  {emotions?.map((emotion, index) => (
                    <li key={index} className="flex justify-start items-center">
                      <span className="w-16">{emotion.name}</span>
                      <progress
                        className="progress progress-primary w-40 ml-3"
                        value={emotion.intensity}
                        max="10"
                      ></progress>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-60 text-left">
              <div>
                <h2 className="text-left text-xl text-primary-focus">
                  Circumstance
                </h2>
                {circumstance}
              </div>
              {isExpanded && (
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-left text-xl text-primary-focus">
                      Thoughts
                    </h2>
                    {thoughts}
                  </div>

                  <div>
                    <h2 className="text-left text-xl text-primary-focus">
                      Physical Symptoms
                    </h2>
                    <ul className="flex flex-col">
                      {symptoms?.map((symptom, index) => (
                        <li key={index}>{symptom.name}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-left text-xl text-primary-focus">
                      Reassessment
                    </h2>
                    {reassessment}
                  </div>

                  <div>
                    <h2 className="text-left text-xl text-primary-focus">
                      Coping Strategies
                    </h2>
                    {coping_strategies}
                  </div>

                  <div>
                    <h2 className="text-left text-xl text-primary-focus">
                      Behaviour
                    </h2>
                    {behaviour}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {isExpanded && (
            <button onClick={toggleExpand} className="w-full">
              <Image
                src="/images/diary/collapse.svg"
                className="mx-auto mb-2"
                alt="Collapse"
                width={20}
                height={20}
              />
            </button>
          )}
          {!isExpanded && (
            <button onClick={toggleExpand} className="w-full">
              <Image
                src="/images/diary/expand.svg"
                className="mx-auto mb-2"
                alt="Expand"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
