import {MouseEvent} from "react"
import "./PriorityWidget.css"
import {priorities, priorityFlash} from "../models/Priority"


export interface Props {
    priorityLevel: number
    onClickPriority: (newPriority: number) => void
}

export const PriorityWidget = ({ priorityLevel, onClickPriority }: Props) => {

    const priorityChangedEvent = (event: MouseEvent<HTMLLabelElement>) => {
        const foundPriority = priorities.find(priority => priority.priorityId === event.currentTarget.id)
        if (foundPriority === undefined) return
        onClickPriority(foundPriority.priority)
    }

    const prioritiesToSet = priorities.map((priority, index) => (
            <label className={priorityLevel >= index ? "ActivePriority" : "InactivePriority"}
                id={priority.priorityId}
                key={priority.priorityId}
                onClick={priorityChangedEvent}>
                {priorityFlash}
            </label>
        )
    )

    return (
        <div className="PriorityWidget">
            {prioritiesToSet}
        </div>
    )
}