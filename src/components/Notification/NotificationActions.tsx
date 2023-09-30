import { Check, X } from "lucide-react"

interface INotificationActions {
    onCancelAction: () => void
    onSubmitAction: () => void
}
export function NotificationActions({ onCancelAction, onSubmitAction }: INotificationActions) {
    return(
        <div className="flex gap-2 self-center">
            <button onClick={onCancelAction} className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800">
                <X className="w-3 h-3 text-zinc-50" />
            </button>
            <button onClick={onSubmitAction} className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800">
                <Check className="w-3 h-3 text-zinc-50" />
            </button>
        </div>
    )
}