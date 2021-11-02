import {Todo} from "../models/Todo"
import "./TodoWidget.css"
import {PriorityWidget} from "./PriorityWidget"

interface Props {
    todo: Todo
    onToggleTodo: (todoId: number) => void
    onDeleteTodo: (todoId: number) => void
    onChangePriority: (todoId: number, newPriority: number) => void
}

export const TodoWidget = ({ todo, onToggleTodo, onDeleteTodo, onChangePriority }: Props) => {

    const priorityChangedEvent = (newPriority: number) => {
        onChangePriority(todo.id, newPriority)
    }

    return (
        <div className="TodoWidget">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggleTodo(todo.id)}
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
                onClick={() => onDeleteTodo(todo.id)}>
                Löschen
            </button>
        </div>
    )
}