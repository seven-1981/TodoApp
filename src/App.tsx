import React, {useState, useEffect} from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputWidget from "./components/InputWidget";
import TodoList from "./components/TodoList";
import {TodoProps} from "./components/Todo";

function App() {

    const [todos, setTodos] = useState<TodoProps[]>([])
    const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>([])

    useEffect(() => {
        setFilteredTodos(todos)
    }, [todos]);

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (inputFieldText === "") {
            return
        }
        setTodos(prevTodos => {
            return [{ name: inputFieldText, done: false, key: 1 }, ...prevTodos]
        })
        setInputFieldText("")
        //setFilteredTodos(todos) - doesn't work -> setState is asynchronous!
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
