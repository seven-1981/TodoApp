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

    const toggleTodoEvent = (update: Todo) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === update.id)
        if (foundTodo === undefined) return
        foundTodo.done = !foundTodo.done
        setTodos(newTodos)
    }

    const deleteButtonClickEvent = (update: Todo) => {
        const newTodos = [...todos]
        const filterTodos = newTodos.filter(todo => todo.id !== update.id)
        setTodos(filterTodos)
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

    const priorityChangedEvent = (update: Todo, newPriority: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === update.id)
        if (foundTodo === undefined) return
        foundTodo.priorityLevel = newPriority
        setTodos(newTodos)
    }

  return (
    <div className="App">
        <AppBar />
        <InputWidget
            onAddButtonClick={addButtonClickEvent}
            onInputFieldChange={inputFieldChangeEvent}
            onShowAllCheckBoxChange={toggleShowAllCheckBoxEvent}
            inputText={inputFieldText}
        />
        <TodoList
            todos={todos}
            onToggleTodo={toggleTodoEvent}
            onDeleteTodo={deleteButtonClickEvent}
            showAll={showAll}
            filterText={inputFieldText}
            onChangePriority={priorityChangedEvent}
        />
    </div>
  )
}

export default App;
