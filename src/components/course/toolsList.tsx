'use client'

import { ReactNode, useState } from "react"
import { Tool } from "./tool"
import { NewEntry } from "../common/newEntry";

export function ToolsList({tools=[]}: {tools: Array<ReactNode>}) {

    let day = new Date() // placeholder

    const [toolsList, setToolsList] = useState(tools);
    const [addingEntry, setAddingEntry] = useState(false);

    function addToolClicked() {
        setAddingEntry(true);
    }

    function handleClose() {
        setAddingEntry(false);
    }

    function addNewEntry() {
        // TODO: Add new entry from input
        setToolsList([toolsList.concat(<Tool title="Don't be sad" description="Just don't do it. It's that easy!" date={day.toLocaleDateString()} />)])
        setAddingEntry(false);
    }

    const newEntryStages = [
        (<div key="0">
            <p className="m-10">Pick a title for your entry</p>
            <input className="input input-bordered mb-6" />
        </div>),
        (<div key="1">
            <p className="m-10">What would you like to note down for the future?</p>
            <textarea className="textarea textarea-bordered" />
        </div>)
    ]

    return (
        <div className="w-2/3 flex flex-col pb-8">
                {toolsList}
                {
                    /* New tool button: only shown if addingEntry is false */
                    !addingEntry && 
                        <button 
                            onClick={addToolClicked} 
                            className="btn btn-primary flex self-center m-4 "
                        >
                            New tool
                        </button>
                }
                
                {
                    /* New tool form: only shown if addingEntry is true */
                    addingEntry && 
                        <NewEntry title="New Toolbox Entry" stages={newEntryStages} onClose={handleClose} onFinish={addNewEntry} />
                }
            </div>
    )
}