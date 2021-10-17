import React, {useState} from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputWidget from "./components/InputWidget";
import TodoList from "./components/TodoList";
import {TodoProps} from "./components/Todo";

function App() {

    const [todos, setTodos] = useState<TodoProps[]>([])
    const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>([])

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button event fired!")
        setTodos(prevTodos => {
            return [{ name: inputFieldText, done: false }, ...prevTodos]
        })

        setInputFieldText("")
        setFilteredTodos(todos)
    }

    const [inputFieldText, setInputFieldText] = useState("")

    const inputFieldChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value
        setInputFieldText(text)
        if (text === "") {
            setFilteredTodos(todos)
            return
        }
        setFilteredTodos(todos.filter(todo => todo.name.includes(text)))
        for (let i = 0; i < filteredTodos.length; i++) {
            console.log(filteredTodos[i].name)
        }
    }

    const doneCheckBoxChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Done checkbox event fired!")
    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            addButtonClickedEvent={addButtonClickedEvent}
            inputFieldChangedEvent={inputFieldChangedEvent}
            doneCheckBoxChangedEvent={doneCheckBoxChangedEvent}
            inputText={inputFieldText}
        />
        <TodoList todos={filteredTodos} />
    </div>
  );
};

export default App;
