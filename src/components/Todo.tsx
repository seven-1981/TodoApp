import React, {useState} from "react";
import './Todo.css';

export interface TodoProps {
    name: String
    done: boolean
    id: number
    toggle: (id: number) => void
    delete: (id: number) => void
}

function Todo(props: TodoProps) {

    const [isDone, setIsDone] = useState(props.done)
    const [labelClassName, setLabelClassName] = useState("LabelNormal")

    const doneCheckBoxChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(props.id.toString().slice(0, 8) + " has been changed")
        if (event.target.checked) {
            setLabelClassName("LabelStrikeThrough")
            setIsDone(true)
        } else {
            setLabelClassName("LabelNormal")
            setIsDone(false)
        }
        //console.log(props)
        props.toggle(props.id)
    }

    const deleteButtonClickedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(props.id.toString().slice(0, 8) + " has been deleted")
        props.delete(props.id)
    }

    return (
        <div className="Todo">
            <label className={labelClassName}>
                <input type="checkbox" checked={isDone} onChange={doneCheckBoxChangedHandler} />
                {props.name}
            </label>
            <button className="DeleteButton" onClick={deleteButtonClickedHandler}>
                Löschen
            </button>
        </div>
    )
}

export default Todo;