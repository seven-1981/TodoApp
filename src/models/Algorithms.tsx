import {Todo} from "./Todo"


export const filterTodosShowAll = (todosToFilter: Todo[], showAll: boolean) => {

    if (!showAll) {
        todosToFilter = todosToFilter.filter(todo => (
            todo.done === false
        ))
    }

    return todosToFilter
}

export const filterTodosInputText = (todosToFilter: Todo[], filterText: string) => {

    if (filterText !== "") {
        const trimmedText = filterText.trim()
        todosToFilter = todosToFilter.filter(todo => (
            /* We convert the text to lowercase here, to prevent Todos that differ only in capitalisation */
            todo.name.toLowerCase().includes(trimmedText.toLowerCase())
        ))
    }

    return todosToFilter
}

export const checkDuplicateTodos = (todosToFilter: Todo[], filterText: string) => {

    const trimmedText = filterText.trim()
    if (trimmedText !== "") {
        todosToFilter = todosToFilter.filter(todo =>
            (todo.name.toLowerCase().localeCompare(trimmedText.toLowerCase())) === 0)
    }

    if (todosToFilter.length === 0)
        return trimmedText
    else
        return ""
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