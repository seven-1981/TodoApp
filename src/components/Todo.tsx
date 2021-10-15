import React from "react";
import './Todo.css';

interface Props {
    name: String
    done: boolean
}

function Todo(props: Props) {

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