import {Todo} from '../models/Todo'
import './SimpleTodo.css'
import {PriorityWidget} from './PriorityWidget'
import {MouseEvent} from "react";
import {Priority} from "../models/Priority";
const { v4: uuidV4 } = require('uuid')

interface Props {
    todo: Todo
    onToggleTodo: (todo: Todo) => void
    onDeleteTodo: (todo: Todo) => void
    onChangePriority: (update: Todo, newPriority: number) => void
}

export const SimpleTodo = ({ todo, onToggleTodo, onDeleteTodo, onChangePriority }: Props) => {

    const priorities: Priority[] = [
        { priority: 0, priorityId: uuidV4().toString() },
        { priority: 1, priorityId: uuidV4().toString() },
        { priority: 2, priorityId: uuidV4().toString() }
    ]

    const toggle = () => onToggleTodo({...todo})
    const remove = () => onDeleteTodo( {...todo})

    const priorityChangedEvent = (event: MouseEvent<HTMLLabelElement>) => {
        const idClicked = event.currentTarget.id
        const foundPriority = priorities.find(priority => priority.priorityId === idClicked)
        if (foundPriority === undefined) return
        console.log("Setting the priority of todo with ID " + todo.id.toString().slice(0, 8) + " to " + foundPriority.priority)
        onChangePriority({...todo}, foundPriority.priority)
    }

    return (
        <div className="SimpleTodo">
            <input type="checkbox" checked={todo.done} onChange={toggle} />
            <PriorityWidget priorityLevel={todo.priorityLevel} priorities={priorities} onClickPriority={priorityChangedEvent} />
            <label className={todo.done ? "LabelStrikeThrough" : "LabelNormal"}>
                {todo.name}
            </label>
            <button className="DeleteButton" onClick={remove}>
                Löschen
            </button>
        </div>
    )
}