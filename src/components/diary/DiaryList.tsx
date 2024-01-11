/**
 * A list of all diary entries made by a user
 */
'use client';

// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { Database } from '@/lib/database.types';
// import Image from 'next/image';
import { useState } from 'react';
import type { Emotion, Symptom, DiaryEntry } from './DiaryCard';
import DiaryCard from './DiaryCard';
import NewDiaryEntry from './NewDiaryEntry';

// export interface DiaryEntry {
//   id: number;
//   date: string;
//   mood: number;
//   emotions?: Emotion[];
//   circumstance: string;
//   symptoms?: Symptom[];
//   thoughts?: string | null;
//   reassessment?: string | null;
//   coping_strategies?: string;
//   behaviour?: string;
// }

export default function DiaryList({
  entries,
  symptomsOptions,
  emotionsOptions,
}: {
  entries: DiaryEntry[];
  symptomsOptions: string[];
  emotionsOptions: string[];
}) {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>(entries);
  const [addingEntry, setAddingEntry] = useState(false);

  function setAddingHelper(value: boolean) {
    setAddingEntry(value);
  }

  function addEntry(entry: DiaryEntry): void {
    setDiaryEntries([entry, ...diaryEntries]);
  }

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col gap-10 text-center">
        {diaryEntries.length === 0 && !addingEntry && (
          <p className="text-2xl m-auto">No entries yet..</p>
        )}
        {diaryEntries.map((entry) => (
          <li key={entry.id}>
            <DiaryCard
              id={entry.id}
              date={entry.date}
              mood={entry.mood}
              emotions={entry.emotions}
              circumstance={entry.circumstance}
              symptoms={entry.symptoms}
              thoughts={entry.thoughts}
              reassessment={entry.reassessment}
              coping_strategies={entry.coping_strategies}
              behaviour={entry.behaviour}
            />
          </li>
        ))}
      </ul>
      <NewDiaryEntry
        setAddingHelper={setAddingHelper}
        addingEntry={addingEntry}
        addNewEntry={addEntry}
        emotionsOptions={emotionsOptions}
        symptomsOptions={symptomsOptions}
      />
    </div>
  );
}
