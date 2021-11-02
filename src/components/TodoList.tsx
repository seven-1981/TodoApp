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

const applySorting = (todosToSort: Todo[]) => {

    const compareTodos = (todoA: Todo, todoB: Todo) => {
        if (todoA.name.toLowerCase() < todoB.name.toLowerCase())
            return -1
        else if (todoA.name.toLowerCase() > todoB.name.toLowerCase())
            return 1
        else
            return 0
    }

    todosToSort.sort(compareTodos)
    return todosToSort
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, showAll, filterText, onChangePriority }: Props) => {

    todos = applyFiltering(todos, showAll, filterText)
    todos = applySorting(todos)

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