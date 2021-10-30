import {Todo} from '../models/Todo'
import './SimpleTodo.css'
import {idPriority1, idPriority2, idPriority3, Priority} from './Priority'
import {MouseEvent} from "react";

interface Props {
    todo: Todo
    onToggleTodo: (todo: Todo) => void
    onDeleteTodo: (todo: Todo) => void
    onClickPriority: (todo: Todo, priority: number) => void
}

export const SimpleTodo = ({ todo, onToggleTodo, onDeleteTodo, onClickPriority }: Props) => {

    const toggle = () => onToggleTodo({...todo})
    const remove = () => onDeleteTodo( {...todo})

    const priority = (event: MouseEvent<HTMLLabelElement>) => {
        let idClicked = event.currentTarget.id
        let priorityToSet = 0
        if (idClicked === idPriority1) {
            priorityToSet = 1
        } else if (idClicked === idPriority2) {
            priorityToSet = 2
        } else if (idClicked === idPriority3) {
            priorityToSet = 3
        }

        onClickPriority({...todo}, priorityToSet)
    }

    return (
        <div className="SimpleTodo">
            <input type="checkbox" checked={todo.done} onChange={toggle} />
            <Priority priority={todo.priority} onClick={priority} />
            <label className={todo.done ? "LabelStrikeThrough" : "LabelNormal"}>
                {todo.name}
            </label>
            <button className="DeleteButton" onClick={remove}>
                Löschen
            </button>
        </div>
    )
}