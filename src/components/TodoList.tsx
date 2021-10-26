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

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, showAll, filterText }: Props) => {

    let filteredTodos = [...todos]
    if (!showAll) {
        filteredTodos = filteredTodos.filter(todo => (
            todo.done === false
        ))
    }
    
    if (filterText !== '') {
        filteredTodos = filteredTodos.filter(todo => (
            todo.name.includes(filterText)
        ))
    }

    let todoList = filteredTodos.map(todo => (
            <SimpleTodo todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} key={todo.id} />
        )
    )

    return (
        <div className="TodoList">
            {todoList.length ? todoList : <p>Keine Todos gefunden</p>}
        </div>
    )
}