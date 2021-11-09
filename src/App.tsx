import React, {useState} from "react"
import "./App.css"
import {AppBar} from "./components/AppBar"
import {InputWidget} from "./components/InputWidget"
import {TodoList} from "./components/TodoList"
import {createTodo, Todo} from "./models/Todo"

function App() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [inputFieldText, setInputFieldText] = useState("")
    const [showAll, setShowAll] = useState(false)
    const [sortByPriority, setSortByPriority] = useState( false)

    const checkAddNewTodo = (): boolean => {
        /* We convert the text to lowercase here, to prevent Todos that differ only in capitalisation */
        const alreadyMatchingTodos = todos.filter(todo => todo.name.toLowerCase() === inputFieldText.toLowerCase())
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
            onSetShowAll={setShowAll}
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

export default App;
