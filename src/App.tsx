import React, {ChangeEvent, useState} from 'react'
import './App.css'
import AppBar from './components/AppBar'
import {InputWidget} from './components/InputWidget'
import {TodoList} from './components/TodoList'
import {createTodo, Todo} from './models/Todo'

function App() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [inputFieldText, setInputFieldText] = useState("")

    let filteredTodos = [...todos]

    function debugTodos(passedTodos: Todo[], text: string) {
        console.log("Content of actual todos: -----" + text + "-----")
        for (let i = 0; i < passedTodos.length; i++) {
            let txt = "Todo " + i + "--- " + passedTodos[i].name + " // " + passedTodos[i].id.toString().slice(0, 8) + " // " + passedTodos[i].done
            console.log(txt)
        }
    }

    const toggleTodo = (update: Todo) => {
        console.log("Toggle Todo with key: " + update.id.toString().slice(0, 8))
        const newTodos = [...todos]
        debugTodos(newTodos, "newTodos")
        const foundTodo = newTodos.find(todo => todo.id === update.id)
        if (foundTodo === undefined) return
        console.log("I have found " + foundTodo.name)
        foundTodo.done = !foundTodo.done
        setTodos(newTodos)
    }

    const deleteTodo = (update: Todo) => {
        console.log("Delete Todo with key: " + update.id.toString().slice(0, 8))
        const newTodos = [...todos]
        debugTodos(newTodos, "deleteTodos")
        const filtTodos = newTodos.filter(todo => todo.id !== update.id)
        if (filtTodos.length === 0) return
        setTodos(filtTodos)
    }

    const addButtonClickedEvent = () => {
        if (inputFieldText === "") {
            return
        }
        const filtTodos = todos.filter(todo => todo.name === inputFieldText)
        if ((todos.length !== 0) && (filtTodos.length !== 0)) return
        const newTodos = [createTodo(inputFieldText), ...todos]
        setTodos(newTodos)
        setInputFieldText("")
    }

    const inputFieldChangedEvent = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value
        setInputFieldText(text)
        let newTodos = [...todos]
        if (text !== "") {
            newTodos = filteredTodos.filter(todo => todo.name.includes(text))
        }
        filteredTodos = newTodos
    }

    const showAllCheckBoxChangedEvent = (event: ChangeEvent<HTMLInputElement>) => {
        let newTodos = [...todos]
        if (!event.target.checked) {
            newTodos = newTodos.filter(todo => todo.done === false
            )
        }
        filteredTodos = newTodos
    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            onAddButtonClick={addButtonClickedEvent}
            onInputFieldChange={inputFieldChangedEvent}
            onShowAllCheckBoxChange={showAllCheckBoxChangedEvent}
            inputText={inputFieldText}
        />
        <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
