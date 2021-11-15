import React, {useState, useEffect} from "react"
import "./App.css"
import {AppBar} from "./components/AppBar"
import {InputWidget} from "./components/InputWidget"
import {TodoList} from "./components/TodoList"
import {createTodo, Todo} from "./models/Todo"
import {filterTodosInputText} from "./models/Algorithms"


const LOCAL_STORAGE_TODO = "todoApp.todos"
const LOCAL_STORAGE_TEXT = "todoApp.text"
const LOCAL_STORAGE_SHOW_ALL = "todoApp.show_all"
const LOCAL_STORAGE_PRIORITY = "todoApp.priority"


function App() {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_TODO)
        if (!storedTodos) return []
        return JSON.parse(storedTodos)
    })

    const [inputFieldText, setInputFieldText] = useState(() => {
        return localStorage.getItem(LOCAL_STORAGE_TEXT) || ""
    })

    const [showAll, setShowAll] = useState(() => {
        return (localStorage.getItem(LOCAL_STORAGE_SHOW_ALL) === "true")
    })

    const [sortByPriority, setSortByPriority] = useState( () => {
        return (localStorage.getItem(LOCAL_STORAGE_PRIORITY) === "true")
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TEXT, inputFieldText)
    }, [inputFieldText])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_SHOW_ALL, showAll.toString())
    }, [showAll])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_PRIORITY, sortByPriority.toString())
    }, [sortByPriority])


    const checkAddNewTodo = (): boolean => {
        const alreadyMatchingTodos = filterTodosInputText(todos, inputFieldText)
        if ((todos.length !== 0) && (alreadyMatchingTodos.length !== 0)) return false
        const newTodos = [createTodo(inputFieldText), ...todos]
        setTodos(newTodos)
        return true
    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            inputText={inputFieldText}
            onSetInputText={setInputFieldText}
            onAddNewTodoSuccess={checkAddNewTodo}
            showAll={showAll}
            onSetShowAll={setShowAll}
            sortByPriority={sortByPriority}
            onSetSortByPriority={setSortByPriority}
        />
        <TodoList
            todos={todos}
            onSetTodos={setTodos}
            showAll={showAll}
            sortByPriority={sortByPriority}
            filterText={inputFieldText}
        />
    </div>
  )
}

export default App
