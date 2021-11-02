import React, {MouseEvent} from 'react'
import './PriorityWidget.css'
import {Priority} from "../models/Priority";
const { v4: uuidV4 } = require('uuid')

export interface Props {
    priorityLevel: number
    onClickPriority: (newPriority: number) => void
}

export const PriorityWidget = ({ priorityLevel, onClickPriority }: Props) => {

    const flash = '\uD83D\uDDF2'

    const priorities: Priority[] = [
        { priority: 0, priorityId: uuidV4().toString() },
        { priority: 1, priorityId: uuidV4().toString() },
        { priority: 2, priorityId: uuidV4().toString() }
    ]

    const priorityChangedEvent = (event: MouseEvent<HTMLLabelElement>) => {
        const idClicked = event.currentTarget.id
        const foundPriority = priorities.find(priority => priority.priorityId === idClicked)
        if (foundPriority === undefined) return
        onClickPriority(foundPriority.priority)
    }

    const prioritiesToSet = priorities.map((priority, index) => (
            <label
                className={priorityLevel >= index ? "ActivePriority" : "InactivePriority"}
                id={priority.priorityId}
                key={priority.priorityId}
                onClick={priorityChangedEvent}>
                {flash}
            </label>
        )
    )

    return (
        <div className="PriorityWidget">
            {prioritiesToSet}
        </div>
    )
}