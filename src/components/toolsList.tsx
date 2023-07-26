'use client'

import { ReactNode, useState } from "react"
import { Tool } from "./tool"
import { NewEntry } from "./newEntry";

export function ToolsList({tools=[]}: {tools: Array<ReactNode>}) {

    let day = new Date(); // Placeholder

    const [toolsList, setToolsList] = useState(tools);
    const [addingEntry, setAddingEntry] = useState(true);

    function addToolClicked() {
        // setToolsList([toolsList.concat(<Tool title="Don't be sad" description="Just don't do it. It's that easy!" date={day.toLocaleDateString()} />)])
        setAddingEntry(true);
    }

    function handleClose() {
        setAddingEntry(false);
    }

    return (
        <div className="w-2/3 flex flex-col pb-8">
                {toolsList}
                <button 
                    onClick={addToolClicked} 
                    className={"btn btn-primary flex self-center m-4 " + (addingEntry ? "hidden" : "visible")}
                >
                    New tool
                </button>
                <div className={addingEntry ? "visible" : "hidden"}>
                    <NewEntry title="New Toolbox Entry" onClose={handleClose}>
                        <p className="m-10">Pick a title for your entry</p>
                        <input className="input input-bordered mb-6"></input>
                    </NewEntry>
                </div>
            </div>
    )
}