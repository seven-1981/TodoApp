import React, {ChangeEvent, useState} from "react";
import {createTodo, CreateTodoProps} from "./Todo";

interface SubmitProps {
    todos: CreateTodoProps[]
    setTodos: React.Dispatch<React.SetStateAction<CreateTodoProps[]>>
    inputText: string
    setInputText: React.Dispatch<React.SetStateAction<string>>
    //setInputText: (text: string) => void
}

function SubmitButton({inputText, setInputText , todos, setTodos} : SubmitProps) {

    const submitButtonHandler = () => {
        console.log("Button clicked")
        setTodos([createTodo(inputText, false), ...todos])
        setInputText("")
    }

    return (
        <div>
            <button className="SubmitButton" onClick={submitButtonHandler}>
                Add ToDo
            </button>
        </div>
    )
}

export default SubmitButton;