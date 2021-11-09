import "./TodoList.css"
import {Todo} from "../models/Todo"
import {TodoWidget} from "./TodoWidget"

interface Props {
    todos: Todo[]
    onToggleTodo: (todoId: number) => void
    onDeleteTodo: (todoId: number) => void
    showAll: boolean
    sortByPriority: boolean
    filterText: string
    onChangePriority: (todoId: number, newPriority: number) => void
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

const applySorting = (todosToSort: Todo[], sortByPriority: boolean) => {

    todosToSort.sort((todoA: Todo, todoB: Todo) => {
            let todoAstring = todoA.name
            let todoBstring = todoB.name
            if (sortByPriority) {
                todoAstring = (1 - todoA.priorityLevel).toString() + todoAstring
                todoBstring = (1 - todoB.priorityLevel).toString() + todoBstring
            }
            return todoAstring.localeCompare(todoBstring)
        }
    )
    return todosToSort
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, showAll, sortByPriority, filterText, onChangePriority }: Props) => {

    todos = applyFiltering(todos, showAll, filterText)
    todos = applySorting(todos, sortByPriority)

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