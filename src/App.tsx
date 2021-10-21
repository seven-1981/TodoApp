import React, {useState, useEffect} from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputWidget from "./components/InputWidget";
import TodoList from "./components/TodoList";
import {TodoProps} from "./components/Todo";
const { v4: uuidV4 } = require('uuid');

function App() {

    const [todos, setTodos] = useState<TodoProps[]>([])
    const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>([])
    const [inputFieldText, setInputFieldText] = useState("")

    function debugTodos(passedTodos: TodoProps[], text: string) {
        console.log("Content of actual todos: --------" + text + "-----")
        for (let i = 0; i < passedTodos.length; i++) {
            let txt = "Todo " + i + "--- " + passedTodos[i].name + " // " + passedTodos[i].id.toString().slice(0, 8) + " // " + passedTodos[i].done
            console.log(txt)
        }
    }

    useEffect(() => {
        debugTodos(todos, "useEffect")
        setFilteredTodos(todos)
    }, [todos]);

    function toggleTodo(id: number) {
        console.log("Toggle Todo with key: " + id.toString().slice(0, 8))
        const newTodos = [...todos]
        debugTodos(newTodos, "newTodos")
        const foundTodo = newTodos.find(todo => todo.id === id)
        console.log(foundTodo)
        if (foundTodo === undefined) return
        console.log("I have found " + foundTodo.name)
        foundTodo.done = !foundTodo.done
        setTodos(newTodos)
    }

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (inputFieldText === "") {
            return
        }
        setTodos(prevTodos => {
            return [{ name: inputFieldText, done: false, id: uuidV4(), toggle: toggleTodo }, ...prevTodos]
        })
        setInputFieldText("")
        //setFilteredTodos(todos) - doesn't work -> setState is asynchronous!
    }

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
        <TodoList todolist={filteredTodos} />
    </div>
  );
};

export default App;
