import { EntryFrame } from "./entryFrame";

export function Tool({title, description, date}) {
    return(
        <EntryFrame date={date}>
            <h1 className="text-2xl text-center text-lm-dark p-2">{title}</h1>
            <p className="text-sm text-center text-lm-dark p-2">{description}</p>
        </EntryFrame>
    )
}