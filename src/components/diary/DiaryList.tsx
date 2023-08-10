'use client';

import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import DiaryCard from './DiaryCard';
import { NewEntry } from '../common/newEntry';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import MoodSelector from './MoodSelector';
import DropdownSelector from './DropdownSelector';

export default function DiaryList({ entries }) {
  const [diaryEntries, setDiaryEntries] = useState(entries);
  const [addingEntry, setAddingEntry] = useState(false);

  const setMood = (mood: string): void => {
    setEntry({ ...entry, mood: mood });
    console.log(entry);
  };

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

  // ! REMOVE THIS LATER
  useEffect(() => {
    console.log(entry);
  }, [entry]);

  const newEntryStages = [
    <div key="0" className="my-4">
      <p className="mb-4">What circumstances do you want to log today?</p>
      <textarea
        className="textarea textarea-bordered mb-4"
        value={entry.circumstance}
        id="circumstance"
        onChange={(e) => setEntry({ ...entry, circumstance: e.target.value })}
      />
    </div>,

    <MoodSelector currentMood={entry.mood} setMood={setMood} key="1" />,

    <div key="2" className="my-4">
      <p className="mb-4">What were you thinking while this was happening?</p>
      <input
        type="text"
        className="textarea textarea-bordered mb-4"
        value={entry.thoughts}
        id="thoughts"
        onChange={(e) => setEntry({ ...entry, thoughts: e.target.value })}
      />
    </div>,

    <DropdownSelector key="3" />,
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
