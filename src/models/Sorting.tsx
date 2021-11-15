import {Todo} from "./Todo"


export const prepareString = (stringToPrepare: string) => {
    return stringToPrepare.trim().toLowerCase()
}

export const filterTodos = (todosToFilter: Todo[], showAll: boolean, filterText: string) => {

    if (!showAll) {
        todosToFilter = todosToFilter.filter(todo => (
            todo.done === false
        ))
    }

    if (filterText !== "") {
        todosToFilter = todosToFilter.filter(todo => (
            prepareString(todo.name).includes(prepareString(filterText))
        ))
    }

    return todosToFilter
}

export const sortTodos = (todosToSort: Todo[], sortByPriority: boolean) => {

    todosToSort.sort((todoA: Todo, todoB: Todo) => {
            if (sortByPriority) {
                return todoB.priorityLevel.toString().localeCompare(todoA.priorityLevel.toString())
                    || prepareString(todoA.name).localeCompare(prepareString(todoB.name))
            } else {
                return prepareString(todoA.name).localeCompare(prepareString(todoB.name))
            }
        }
    )
    return todosToSort
}