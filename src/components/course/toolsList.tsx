/**
 * Displays a list of notes that the user has written down as well as a button to add a new note.
 */

'use client';

import { ReactNode, useState } from 'react';
import { Tool } from './tool';
import { NewEntry } from '../common/newEntry';

interface newTool {
  title: string;
  description: string;
}

export function ToolsList({ tools = [] }: { tools: Array<ReactNode> }) {
  // Intial state of entry
  const [entry, setEntry] = useState<newTool>({
    title: '',
    description: '',
  });

  // Resets entry to be empty
  const resetEntry = () => {
    setEntry({
      title: '',
      description: '',
    });
  };

  const [toolsList, setToolsList] = useState(tools);
  const [addingEntry, setAddingEntry] = useState(false);

  function addToolClicked() {
    setAddingEntry(true);
  }

  function handleClose() {
    setAddingEntry(false);
    resetEntry();
  }

  function addNewEntry() {
    // TODO: Add new entry from input
    setToolsList([
      toolsList.concat(
        <Tool
          title={entry.title}
          description={entry.description}
          date={new Date().toLocaleDateString()}
        />,
      ),
    ]);
    setAddingEntry(false);
    resetEntry();
  }

  const newEntryStages = [
    <div key="0">
      <p className="m-10">Pick a title for your entry</p>
      <input
        value={entry.title}
        onChange={(e) => {
          setEntry({ ...entry, title: e.target.value });
        }}
        className="input input-bordered mb-6"
      />
    </div>,
    <div key="1">
      <p className="m-10">What would you like to note down for the future?</p>
      <textarea
        value={entry.description}
        onChange={(e) => {
          setEntry({ ...entry, description: e.target.value });
        }}
        className="textarea textarea-bordered"
      />
    </div>,
  ];

  return (
    <div className="w-2/3 flex flex-col pb-8">
      {toolsList}
      {
        /* New tool button: only shown if addingEntry is false */
        !addingEntry && (
          <button
            onClick={addToolClicked}
            className="btn btn-primary flex self-center m-4 "
          >
            New tool
          </button>
        )
      }

      {
        /* New tool form: only shown if addingEntry is true */
        addingEntry && (
          <NewEntry
            title="New Toolbox Entry"
            stages={newEntryStages}
            onClose={handleClose}
            onFinish={addNewEntry}
            stageRequirements={[entry.title !== '', true]}
          />
        )
      }
    </div>
  );
}
