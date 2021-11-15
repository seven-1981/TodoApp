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