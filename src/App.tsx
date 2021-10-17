import React, {useState} from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputField from "./components/InputWidget";
import TodoList from "./components/TodoList";
import {TodoProps} from "./components/Todo";

function App() {

    const [todos, setTodos] = useState<TodoProps[]>([])

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button event fired!")
        setTodos(prevTodos => {
            return [...prevTodos, { name: inputFieldText, done: false }]
        })
    }

    const [inputFieldText, setInputFieldText] = useState("")

    const inputFieldChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value
        console.log("Text is now " + text)
        setInputFieldText(text)
    }

    const doneCheckBoxChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Done checkbox event fired!")
    }

  return (
    <div className="App">
        <AppBar />
        <InputField
            addButtonClickedEvent={addButtonClickedEvent}
            inputFieldChangedEvent={inputFieldChangedEvent}
            doneCheckBoxChangedEvent={doneCheckBoxChangedEvent}
        />
        <TodoList todos={todos} />
    </div>
  );
};

export default App;
