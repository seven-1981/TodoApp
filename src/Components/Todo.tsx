import React, {useState} from "react";

export interface CreateTodoProps {
    text: String
    checked: boolean
    id: number
}

interface TodoProps {
    text: String
    id: number
    passedDeleteHandler: (id: number) => void
}

const { v4: uuidV4 } = require('uuid')

export const createTodo = (text: String, done: boolean) => {
    return{ text: text, checked: done, id: uuidV4() }
}

function Todo({ text , id, passedDeleteHandler }: TodoProps) { // todos, setTodos

    const [checked, setChecked] = useState(false)

    const deleteHandler = () => {
        console.log(id)
        passedDeleteHandler(id)
    }

    const completeHandler = () => {
        console.log(id, checked)
        setChecked(!checked)
    }

    return (
        <div className="Todo">
            <input type="checkbox" checked={checked} onChange={completeHandler} />
            <label>
                {text}
            </label>
            <button className="DeleteButton" onClick={deleteHandler}> Delete </button>
        </div>
    )
}

export default Todo;

