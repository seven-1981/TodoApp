import {Todo} from '../models/Todo'
import './SimpleTodo.css'

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
            <label className={todo.done ? "LabelStrikeThrough" : "LabelNormal"}>
                <input type="checkbox" checked={todo.done} onChange={toggle} />
                {todo.name}
            </label>
            <button className="DeleteButton" onClick={remove}>
                Löschen
            </button>
        </div>
    )
}