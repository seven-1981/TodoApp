import {Todo} from "./Todo"

export const filterTodos = (todosToFilter: Todo[], showAll: boolean, filterText: string) => {

    if (!showAll) {
        todosToFilter = todosToFilter.filter(todo => (
            todo.done === false
        ))
    }

    if (filterText !== "") {
        todosToFilter = todosToFilter.filter(todo => (
            todo.name.trim().toLowerCase().includes(filterText.trim().toLowerCase())
        ))
    }

    return todosToFilter
}

export const sortTodos = (todosToSort: Todo[], sortByPriority: boolean) => {

    todosToSort.sort((todoA: Todo, todoB: Todo) => {
            if (sortByPriority) {
                return todoB.priorityLevel.toString().localeCompare(todoA.priorityLevel.toString())
                    || todoA.name.localeCompare(todoB.name)
            } else {
                return todoA.name.localeCompare(todoB.name)
            }
        }
    )
    return todosToSort
}