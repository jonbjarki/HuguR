import Icon from "@mdi/react";

export function IconButton({onClick, iconPath, btnSize="md"}) {
    return (
        <button onClick={onClick} className={"btn btn-primary btn-circle btn-outline border-2 btn-" + btnSize}>
                    <Icon path={iconPath} className="w-3/4 h-3/4" />
        </button>
    )
}