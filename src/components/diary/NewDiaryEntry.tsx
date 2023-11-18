import { Database } from '@/lib/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Emotion, Symptom } from './DiaryCard';
import { NewEntry } from '../common/newEntry';
import EmotionIntensity from './EmotionIntensity';
import DropdownSelector from './DropdownSelector';
import MoodSelector from './MoodSelector';
import { DiaryEntry } from './DiaryList';
import UserInput from './UserInput';

interface NewEntry extends Omit<DiaryEntry, 'id'> {}

function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Intial state of entry
const baseEntry: NewEntry = {
  date: getCurrentDate(),
  mood: '',
  emotions: [],
  circumstance: '',
  symptoms: [],
  thoughts: '',
  reassessment: '',
  coping_strategies: '',
  behaviour: '',
};

export default function NewDiaryEntry({
  addNewEntry,
  setAddingHelper,
  addingEntry,
  emotionsOptions,
  symptomsOptions,
}: {
  addNewEntry: Function;
  setAddingHelper: Function;
  addingEntry: boolean;
  emotionsOptions: string[];
  symptomsOptions: string[];
}) {
  // Sets intial state of entry to be an empty entry
  const [entry, setEntry] = useState<NewEntry>(
    JSON.parse(JSON.stringify(baseEntry)),
  );

  // Sets mood of entry
  const setMood = (mood: string): void => {
    setEntry({ ...entry, mood: mood });
  };

  // Adds emotion to entry if it doesn't exist, otherwise removes it
  function emotionsHandler(name: string): void {
    const emotion = { name: name, intensity: 5 };
    if (entry.emotions?.some((e) => e.name === emotion.name)) {
      const newEmotions = entry.emotions.filter((e) => e.name !== emotion.name);
      setEntry({ ...entry, emotions: newEmotions });
    } else {
      const newEmotions = entry.emotions?.concat([emotion]);
      setEntry({ ...entry, emotions: newEmotions });
    }
  }

  // Adds symptom to entry if it doesn't exist, otherwise removes it
  function symptomHandler(symptom: string): void {
    if (entry.symptoms?.some((s) => s.name === symptom)) {
      const newSymptoms = entry.symptoms.filter((s) => s.name !== symptom);
      setEntry({ ...entry, symptoms: newSymptoms });
    } else {
      const newSymptoms = entry.symptoms?.concat({ name: symptom });
      setEntry({ ...entry, symptoms: newSymptoms });
    }
  }

  // Takes in an emotion and updates the intensity of that emotion in the entry
  function intensityHandler(emotion: Emotion): void {
    const emotions = entry.emotions?.map((e) => {
      if (e.name === emotion.name) {
        e.intensity = emotion.intensity;
      }
      return e;
    });
    setEntry({ ...entry, emotions: emotions });
  }

  // Stages for new entry form
  const newEntryStages = [
    // Asks user for what circumstances they want to log
    <UserInput
      key="0"
      caption="What circumstances do you want to log today?"
      type="text"
      value={entry.circumstance}
      onChange={(e) => setEntry({ ...entry, circumstance: e.target.value })}
      required={true}
    />,

    <UserInput
      key="1"
      caption="What date did this happen?"
      type="date"
      value={entry.date}
      onChange={(e) => setEntry({ ...entry, date: e.target.value })}
      required={true}
    />,

    // Asks user for how they felt during the circumstances on a scale of 1 to 5
    <MoodSelector currentMood={entry.mood} setMood={setMood} key="1" />,

    // Asks user for what they were thinking during the circumstances
    <UserInput
      key="2"
      caption="What were you thinking?"
      type="text"
      value={entry.thoughts ? entry.thoughts : ''}
      onChange={(e) => setEntry({ ...entry, thoughts: e.target.value })}
    />,

    // Asks user to select what emotions they felt during the circumstances from a dropdown
    <DropdownSelector
      caption="What emotions did you feel?"
      key="3"
      options={emotionsOptions}
      selectedItems={entry.emotions?.map((e) => e.name)}
      selectHandler={emotionsHandler}
      required={true}
    />,

    // Asks user to select the intensity of each emotion they felt during the circumstances
    <EmotionIntensity
      key="4"
      emotions={entry.emotions}
      changeHandler={intensityHandler}
    />,

    // Asks user to select what symptoms they felt during the circumstances from a dropdown
    <DropdownSelector
      caption="What symptoms did you experience?"
      key="5"
      options={symptomsOptions}
      selectedItems={entry.symptoms?.map((s) => s.name)}
      selectHandler={symptomHandler}
    />,

    <UserInput
      key="6"
      caption="How did you act in response to the situation?"
      type="text"
      value={entry.behaviour}
      onChange={(e) => setEntry({ ...entry, behaviour: e.target.value })}
    />,
  ];

  // Opens new entry form when button is clicked
  function addEntryClicked(): void {
    setAddingHelper(true);
  }

  // Closes new entry form and resets entry to base state
  function handleClose(): void {
    setAddingHelper(false);
    // Resets entry to base state
    setEntry(JSON.parse(JSON.stringify(baseEntry)));
  }

  // Adds entry to database
  async function addEntry(): Promise<void> {
    // Add entry to database
    const supabase = createClientComponentClient<Database>();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return redirect('/');

    const { data, error } = await supabase
      .from('diary')
      .insert({
        circumstance: entry.circumstance,
        mood: parseInt(entry.mood),
        thoughts: entry.thoughts,
        reassessment: entry.reassessment,
        coping_strategies: entry.coping_strategies,
        behaviour: entry.behaviour,
        user_id: session.user.id,
        date: entry.date,
      })
      .select();

    if (error) {
      console.error(error);
      return;
    } else {
      // Add emotions and symptoms to database
      entry.emotions?.forEach(async (emotion) => {
        const { error } = await supabase.from('emotions').insert({
          diary_id: data[0].id,
          name: emotion.name,
          intensity: emotion.intensity,
        });
        if (error) {
          console.error(error);
          return;
        }
      });
      entry.symptoms?.forEach(async (symptom) => {
        const { error } = await supabase.from('symptoms').insert({
          diary_id: data[0].id,
          name: symptom.name,
        });
        if (error) {
          console.error(error);
          return;
        }
      });
    }

    handleClose();
    addNewEntry({ ...entry, id: data[0].id });
  }

  return (
    <div className="self-center">
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
          stages={newEntryStages} // stages={[newEntryStages[newEntryStages.length - 1]]}
          onClose={handleClose}
          onFinish={addEntry}
          stageRequirements={{
            0: entry.circumstance !== '',
            1: entry.date != '',
            2: entry.mood !== '',
            3: true,
            4: entry.emotions !== undefined && entry.emotions.length > 0,
            5: true,
            6: true,
            7: true,
          }}
        />
      )}
    </div>
  );
}
