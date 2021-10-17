import React from "react";
import './Todo.css';

export interface TodoProps {
    name: String
    done: boolean
}

const doneCheckBoxClickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.style.fontStyle === 'line-through') {
        event.target.style.fontStyle = 'normal'
    } else {
        event.target.style.fontStyle = 'line-through'
    }
}

function Todo(props: TodoProps) {

    return (
        <div className="Todo">
            <label>
                <input type="checkbox" checked={props.done} onChange={doneCheckBoxClickedHandler} />
                {props.name}
            </label>
        </div>
    )
}

export default Todo;