'use client';
import { useState } from 'react';
import DiaryCard from './DiaryCard';
import { NewEntry } from '../common/newEntry';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';

export default async function DiaryList({ entries }) {
  const [diaryEntries, setDiaryEntries] = useState(entries);
  const [addingEntry, setAddingEntry] = useState(false);

  const supabase = createClientComponentClient<Database>();

  const { data, error } = await supabase.storage.from('images').list('mood', {
    limit: 100,
  });
  console.log(data);

  const [entry, setEntry] = useState({
    date: '',
    mood: '',
    emotions: [],
    circumstance: '',
    symptoms: [],
    thoughts: '',
    reassessment: '',
    coping_strategies: [],
    behaviour: '',
  });

  const newEntryStages = [
    <div key="0">
      <p className="m-10">What circumstances do you want to log today?</p>
      <textarea className="textarea textarea-bordered" />
    </div>,

    <div key="1">
      <p className="m-10">How did the circumstances make you feel?</p>
      {/* Input with a scale from 1 to 5 with each scale represented by an emoji */}
      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-row items-center">
          <input type="radio" name="mood" value="1" />
          <label className="ml-2">😭</label>
        </div>
      </div>
    </div>,
  ];

  function addEntryClicked(): void {
    setAddingEntry(true);
  }

  function handleClose(): void {
    setAddingEntry(false);
  }

  function addEntry(): void {
    setDiaryEntries([
      diaryEntries.concat(
        // Diary card with generic mock values
        <DiaryCard
          id={0}
          date={'2023-08-06'}
          mood={'5'}
          emotions={[
            { name: 'Happy', intensity: 5 },
            { name: 'Nostalgic', intensity: 3 },
          ]}
          circumstance={'I was walking down the street and saw a dog'}
          thoughts={'I thought about how cute the dog was'}
          // leaves symptoms, coping and reassessment blank
          behaviour={'I pet the dog'}
        />,
      ),
    ]);
    setAddingEntry(false);
  }

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col">
        {diaryEntries.map((entry) => (
          <li key={entry.id}>
            <DiaryCard
              id={entry.id}
              date={entry.created_at}
              mood={entry.mood}
              emotions={entry.emotion}
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
      {/* Button for adding new Diary Entry */}
      {!addingEntry && (
        <button
          onClick={addEntryClicked}
          className="btn btn-primary self-center m-4 "
        >
          New Entry
        </button>
      )}
      {/* New Entry Form */}
      {addingEntry && (
        <NewEntry
          title="New Diary Entry"
          stages={newEntryStages}
          onClose={handleClose}
          onFinish={addEntry}
        />
      )}
    </div>
  );
}
