import "./TodoList.css"
import {Todo} from "../models/Todo"
import {TodoWidget} from "./TodoWidget"
import {filterTodosShowAll, filterTodosInputText, sortTodos} from "../models/Algorithms"


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

    todos = filterTodosShowAll(todos, showAll)
    todos = filterTodosInputText(todos, filterText)
    todos = sortTodos(todos, sortByPriority)

    const todoList = todos.map(todo => (
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