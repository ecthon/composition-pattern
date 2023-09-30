import { ButtonHTMLAttributes, ElementType } from "react"

interface INotificationAction  extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: ElementType
}
export function NotificationAction({ icon: Icon, ...rest }: INotificationAction) {
    return(
        <button
            {...rest} 
            className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800"
        >
            <Icon className="w-3 h-3 text-zinc-50" />
        </button>
    )
}