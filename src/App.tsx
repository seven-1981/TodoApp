import React, {ChangeEvent, useState} from 'react'
import './App.css'
import {AppBar} from './components/AppBar'
import {InputWidget} from './components/InputWidget'
import {TodoList} from './components/TodoList'
import {createTodo, Todo} from './models/Todo'

function App() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [inputFieldText, setInputFieldText] = useState("")
    const [showAll, setShowAll] = useState(false)
    const [sortByPriority, setSortByPriority] = useState( false)

    const toggleTodoEvent = (todoId: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === todoId)
        if (foundTodo === undefined) return
        foundTodo.done = !foundTodo.done // ??? create ... copy here (change one todo)
        setTodos(newTodos)
    }

    const deleteButtonClickEvent = (todoId: number) => {
        const newTodos = [...todos]
        const filterTodos = newTodos.filter(todo => todo.id !== todoId)
        setTodos(filterTodos) // ??? create ... copy here (change one todo)
    }

    const addButtonClickEvent = () => {
        if (inputFieldText === "") {
            return
        }
        /* We convert the text to lowercase here, to prevent Todos that differ only in capitalisation */
        const filterTodos = todos.filter(todo => todo.name.toLowerCase() === inputFieldText.toLowerCase())
        if ((todos.length !== 0) && (filterTodos.length !== 0)) return
        const newTodos = [createTodo(inputFieldText), ...todos]
        setTodos(newTodos)
        setInputFieldText("")
    }

    const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setInputFieldText(event.target.value)
    }

    const toggleShowAllCheckBoxEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setShowAll(event.target.checked)
    }

    const toggleSortByPriorityCheckBoxEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setSortByPriority(event.target.checked)
    }

    const priorityChangedEvent = (todoId: number, newPriority: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === todoId)
        if (foundTodo === undefined) return
        foundTodo.priorityLevel = newPriority // ??? create ... copy here (change one todo)
        setTodos(newTodos)
    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            inputText={inputFieldText}
            onAddButtonClick={addButtonClickEvent}
            onInputFieldChange={inputFieldChangeEvent}
            onShowAllCheckBoxChange={toggleShowAllCheckBoxEvent}
            onSortByPriorityCheckBoxChange={toggleSortByPriorityCheckBoxEvent}
        />
        <TodoList
            todos={todos}
            onToggleTodo={toggleTodoEvent}
            onDeleteTodo={deleteButtonClickEvent}
            showAll={showAll}
            sortByPriority={sortByPriority}
            filterText={inputFieldText}
            onChangePriority={priorityChangedEvent}
        />
    </div>
  )
}

export default App;
