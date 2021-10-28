import {Todo} from '../models/Todo'
import './SimpleTodo.css'
import {Priority} from './Priority'

interface Props {
    todo: Todo
    onToggleTodo: (todo: Todo) => void
    onDeleteTodo: (todo: Todo) => void
}

export const SimpleTodo = ({ todo, onToggleTodo, onDeleteTodo }: Props) => {

    const toggle = () => onToggleTodo({...todo})
    const remove = () => onDeleteTodo( {...todo})

    return (
        <div className="SimpleTodo">
            <input type="checkbox" checked={todo.done} onChange={toggle} />
            <Priority />
            <label className={todo.done ? "LabelStrikeThrough" : "LabelNormal"}>
                {todo.name}
            </label>
            <button className="DeleteButton" onClick={remove}>
                Löschen
            </button>
        </div>
    )
}