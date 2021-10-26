import React from 'react'
import './TodoList.css'
import {Todo} from '../models/Todo'
import {SimpleTodo} from './SimpleTodo'

interface Props {
    todos: Todo[]
    onToggleTodo: (todo: Todo) => void
    onDeleteTodo: (todo: Todo) => void
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: Props) => {

    const todoList = todos.map(todo => (
            <SimpleTodo todo={todo} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} key={todo.id} />
        )
    )

    return (
        <div>
            {todos.length ? todoList : <p>Keine Todos gefunden</p>}
        </div>
    )
}