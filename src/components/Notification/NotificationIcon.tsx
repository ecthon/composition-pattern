import { ElementType } from "react"

interface INotification {
    icon: ElementType
}

export function NotificationIcon({icon: Icon}: INotification) {
    return(
        <Icon className="w-6 h-6 text-violet-500 mt-3"/>
    )
}