import Icon from '@mdi/react'

export function IconButton({onClick, iconPath, btnSize="md"}) {
    let style = "btn btn-primary btn-outline p-1 rounded-full aspect-square border-2 btn-" + btnSize;
    return (
        <button onClick={onClick} className={style}>
            <Icon path={iconPath} className="h-full w-full" />
        </button>
    )
}