import React from "react";
import './Todo.css';

export interface TodoProps {
    name: String
    done: boolean
}

function Todo(props: TodoProps) {

    return (
        <div className="Todo">
            <label>
                <input type="checkbox" checked={props.done}/>
                {props.name}
            </label>
        </div>
    )
}

export default Todo;