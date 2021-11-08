import React, {ChangeEvent, useState} from "react";
import {CreateTodoProps} from "./Todo";

interface InputProps {
    //updateText: React.ChangeEventHandler<HTMLInputElement>
    inputText: string
    setInputText: React.Dispatch<React.SetStateAction<string>>
}

function InputTodo( {inputText, setInputText} : InputProps) {

    const inputTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    };

    return (
        <div className="todo-input">
            <input
                className="InputText"
                placeholder="Enter ToDo here..."
                type="text"
                onChange={inputTextHandler}
                value={inputText} />

            <select name="todos" className="filter-todos">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default InputTodo;