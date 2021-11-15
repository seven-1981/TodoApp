import "./TodoList.css"
import {Todo} from "../models/Todo"
import {TodoWidget} from "./TodoWidget"
import {filterTodosShowAll, filterTodosInputText, sortTodos} from "../models/Sorting"


interface Props {
    todos: Todo[]
    onSetTodos: (todos: Todo[]) => void
    showAll: boolean
    sortByPriority: boolean
    filterText: string
}

export const TodoList = ({ todos, onSetTodos, showAll, sortByPriority, filterText }: Props) => {

    const toggleTodoEvent = (todoId: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === todoId)
        if (foundTodo === undefined) return
        foundTodo.done = !foundTodo.done
        onSetTodos(newTodos)
    }

    const deleteButtonClickEvent = (todoId: number) => {
        const newTodos = [...todos]
        const remainingTodos = newTodos.filter(todo => todo.id !== todoId)
        onSetTodos(remainingTodos)
    }

    const priorityChangedEvent = (todoId: number, newPriority: number) => {
        const newTodos = [...todos]
        const foundTodo = newTodos.find(todo => todo.id === todoId)
        if (foundTodo === undefined) return
        foundTodo.priorityLevel = newPriority
        onSetTodos(newTodos)
    }

    let newTodos = [...todos]
    const trimmedText = filterText.trim()
    newTodos = filterTodosShowAll(newTodos, showAll)
    newTodos = filterTodosInputText(newTodos, trimmedText)
    newTodos = sortTodos(newTodos, sortByPriority)

    const todoList = newTodos.map(todo => (
            <TodoWidget
                todo={todo}
                onToggleTodo={toggleTodoEvent}
                onDeleteTodo={deleteButtonClickEvent}
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