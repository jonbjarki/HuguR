import Icon from "@mdi/react";

export function IconButton({onClick, iconPath, btnSize="md"}) {
    const style = "btn btn-primary btn-circle btn-outline border-2 btn-" + btnSize;
    return (
        <button onClick={onClick} className={style}>
            <Icon path={iconPath} className="w-3/4 h-3/4" />
        </button>
    )
}