import React from 'react'
import './TodoList.css'
import {Todo} from '../models/Todo'
import {SimpleTodo} from './SimpleTodo'

interface Props {
    todos: Todo[]
    onToggleTodo: (todo: Todo) => void
    onDeleteTodo: (todo: Todo) => void
    showAll: boolean
    filterText: string
}

const applyFiltering = (todosToFilter: Todo[], showAll: boolean, filterText: string) => {

    if (!showAll) {
        todosToFilter = todosToFilter.filter(todo => (
            todo.done === false
        ))
    }

    if (filterText !== '') {
        todosToFilter = todosToFilter.filter(todo => (
            todo.name.toLowerCase().includes(filterText.toLowerCase())
        ))
    }

    return todosToFilter
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, showAll, filterText }: Props) => {

    todos = applyFiltering(todos, showAll, filterText)

    let todoList = todos.map(todo => (
            <SimpleTodo todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} key={todo.id} />
        )
    )

    return (
        <div className="TodoList">
            {todoList.length ? todoList : <p>Keine Todos gefunden</p>}
        </div>
    )
}