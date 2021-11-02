import React from "react"
import "./TodoList.css"
import {Todo} from "../models/Todo"
import {TodoWidget} from "./TodoWidget"

interface Props {
    todos: Todo[]
    onToggleTodo: (update: Todo) => void
    onDeleteTodo: (update: Todo) => void
    showAll: boolean
    filterText: string
    onChangePriority: (update: Todo, newPriority: number) => void
}

const applyFiltering = (todosToFilter: Todo[], showAll: boolean, filterText: string) => {

    if (!showAll) {
        todosToFilter = todosToFilter.filter(todo => (
            todo.done === false
        ))
    }

    if (filterText !== "") {
        todosToFilter = todosToFilter.filter(todo => (
            todo.name.toLowerCase().includes(filterText.toLowerCase())
        ))
    }

    return todosToFilter
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, showAll, filterText, onChangePriority }: Props) => {

    todos = applyFiltering(todos, showAll, filterText)

    const todoList = todos.map(todo => (
            <TodoWidget
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
                key={todo.id}
                onChangePriority={onChangePriority}
            />
        )
    )

    return (
        <div className="TodoList">
            {todoList.length ? todoList : <label>Keine Todos gefunden</label>}
        </div>
    )
}