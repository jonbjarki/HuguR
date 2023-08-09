import Icon from "@mdi/react";
import { mdiInformationOutline } from '@mdi/js';

export function Info({ text }) {

    return (
        <div className="tooltip tooltip-left" data-tip={text}>
            <Icon path={mdiInformationOutline} className="w-8 h-8 text-base-content opacity-60" />
        </div>
    )
}