import { EntryFrame } from "@/components/entryFrame";
import { NewEntry } from "@/components/newEntry";
import { Tool } from "@/components/tool";

export default function CourseToolbox() {
    let day = new Date(); // Placeholder

    // TODO: fetch descriptions + dates + titles from database
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl text-base-content opacity-60 py-8">Toolbox</h1>
            <p className="text-base-content opacity-60 pb-8 w-1/2">At the end of each module, you can write down something helpful you&apos;ve learned. This is where those “tools” will appear.
You can also add new tools at any time.</p>
            <div className="w-2/3 flex flex-col pb-8">
                <Tool 
                title="Don't be sad" 
                description="Just don't do it. Why would you be sad? Idiot" 
                date={day.toLocaleDateString()} />
                <Tool 
                title="Don't be sad" 
                description="Just don't do it. Why would you be sad? Idiot" 
                date={day.toLocaleDateString()} />
                <Tool 
                title="Don't be sad" 
                description="Just don't do it. Why would you be sad? Idiot" 
                date={day.toLocaleDateString()} />
                <button className="btn btn-primary flex self-center m-4">New tool</button>
                <NewEntry title="title">
                    bla
                </NewEntry>
            </div>
        </div>
    )
}