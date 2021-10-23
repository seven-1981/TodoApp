import React, {useState, useEffect, useRef} from 'react';
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

    const todosRef = useRef<TodoProps[]>(todos)
    todosRef.current = todos

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

    useEffect( () => {
        debugTodos(filteredTodos, "useEffectFiltered")
    }, [filteredTodos])

    const toggleTodo = (passedId: number) => {
        console.log("Toggle Todo with key: " + passedId.toString().slice(0, 8))
        const newTodos = [...todosRef.current]
        debugTodos(newTodos, "newTodos")
        const foundTodo = newTodos.find(todo => todo.id === passedId)
        if (foundTodo === undefined) return
        console.log("I have found " + foundTodo.name)
        foundTodo.done = !foundTodo.done
        setTodos(newTodos)
    }

    const deleteTodo = (passedId: number) => {
        console.log("Delete Todo with key: " + passedId.toString().slice(0, 8))
        const newTodos = [...todosRef.current]
        debugTodos(newTodos, "deleteTodos")
        const filtTodos = newTodos.filter(todo => todo.id !== passedId)
        if (filtTodos.length === 0) return
        setTodos(filtTodos)
    }

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (inputFieldText === "") {
            return
        }
        const filtTodos = todosRef.current.filter(todo => todo.name === inputFieldText)
        if ((todosRef.current.length !== 0) && (filtTodos.length !== 0)) return
        const newTodos = [{ name: inputFieldText, done: false, id: uuidV4(), toggle: toggleTodo, delete: deleteTodo }, ...todosRef.current]
        setTodos(newTodos)
        setInputFieldText("")
    }

    const inputFieldChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value
        setInputFieldText(text)
        const newTodos = [...todosRef.current]
        if (text === "") {
            setFilteredTodos(newTodos)
            return
        }
        const filtTodos = newTodos.filter(todo => todo.name.includes(text))
        setFilteredTodos(filtTodos)
    }

    const showAllCheckBoxChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Show all checkbox event fired!")

    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            addButtonClickedEvent={addButtonClickedEvent}
            inputFieldChangedEvent={inputFieldChangedEvent}
            showAllCheckBoxChangedEvent={showAllCheckBoxChangedEvent}
            inputText={inputFieldText}
        />
        <TodoList todolist={filteredTodos} />
    </div>
  );
};

export default App;
