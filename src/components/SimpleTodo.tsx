import {Todo} from "../models/Todo"
import "./SimpleTodo.css"
import {PriorityWidget} from "./PriorityWidget"

interface Props {
    todo: Todo
    onToggleTodo: (update: Todo) => void
    onDeleteTodo: (update: Todo) => void
    onChangePriority: (update: Todo, newPriority: number) => void
}

export const SimpleTodo = ({ todo, onToggleTodo, onDeleteTodo, onChangePriority }: Props) => {

    const priorityChangedEvent = (newPriority: number) => {
        onChangePriority({...todo}, newPriority)
    }

    return (
        <div className="SimpleTodo">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggleTodo({...todo})}
            />
            <PriorityWidget
                priorityLevel={todo.priorityLevel}
                onClickPriority={priorityChangedEvent}
            />
            <label
                className={todo.done ? "LabelStrikeThrough" : "LabelNormal"}>
                {todo.name}
            </label>
            <button
                className="DeleteButton"
                onClick={() => onDeleteTodo( {...todo})}>
                Löschen
            </button>
        </div>
    )
}