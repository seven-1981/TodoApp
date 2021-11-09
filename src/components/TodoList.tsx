import "./TodoList.css"
import {Todo} from "../models/Todo"
import {TodoWidget} from "./TodoWidget"

interface Props {
    todos: Todo[]
    onSetTodos: (todos: Todo[]) => void
    onToggleTodo: (todoId: number) => void
    onDeleteTodo: (todoId: number) => void
    showAll: boolean
    sortByPriority: boolean
    filterText: string
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

export const TodoList = ({ todos, onSetTodos, onToggleTodo, onDeleteTodo, showAll, sortByPriority, filterText }: Props) => {

    const priorityChangedEvent = (todoId: number, newPriority: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === todoId)
        if (foundTodo === undefined) return
        foundTodo.priorityLevel = newPriority // ??? create ... copy here (change one todo)
        onSetTodos(newTodos)
    }

    todos = applyFiltering(todos, showAll, filterText)
    todos = applySorting(todos, sortByPriority)

    const todoList = todos.map(todo => (
            <TodoWidget
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
                key={todo.id}
                onChangePriority={priorityChangedEvent}
            />
        )
    )

    return (
        <div className="TodoList">
            {todoList.length ? todoList : <label>Keine Todos gefunden</label>}
        </div>
    )
}