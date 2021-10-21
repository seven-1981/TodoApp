import React, {useState} from "react";
import './Todo.css';

export interface TodoProps {
    name: String
    done: boolean
    id: number
    toggle: (id: number) => void
}

function Todo(props: TodoProps) {

    const [isDone, setIsDone] = useState(false)
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
        props.toggle(props.id)
    }

    return (
        <div className="Todo">
            <label className={labelClassName}>
                <input type="checkbox" checked={isDone} onChange={doneCheckBoxChangedHandler} />
                {props.name}
            </label>
        </div>
    )
}

export default Todo;