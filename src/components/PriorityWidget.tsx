import React, {MouseEvent} from 'react'
import './PriorityWidget.css'
import {Priority} from "../models/Priority";

export interface Props {
    priorityLevel: number
    priorities: Priority[]
    onClickPriority: (event: MouseEvent<HTMLLabelElement>) => void
}

export const PriorityWidget = ({ priorityLevel, priorities, onClickPriority }: Props) => {

    const flash = '\uD83D\uDDF2'

    const prioritiesToSet = priorities.map((priority, index) => (
            <label className={priorityLevel >= index ? "ActivePriority" : "InactivePriority"}
                   id={priority.priorityId}
                   key={priority.priorityId}
                   onClick={onClickPriority}>
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