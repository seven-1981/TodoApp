import {Todo} from "./Todo"

export const filterTodos = (todosToFilter: Todo[], showAll: boolean, filterText: string) => {

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

export const sortTodos = (todosToSort: Todo[], sortByPriority: boolean) => {

    todosToSort.sort((todoA: Todo, todoB: Todo) => {
            let todoAstring = todoA.name
            let todoBstring = todoB.name
            if (sortByPriority) {
                todoAstring = (1.0 / todoA.priorityLevel).toString() + todoAstring
                todoBstring = (1.0 / todoB.priorityLevel).toString() + todoBstring
            }
            return todoAstring.localeCompare(todoBstring)
        }
    )
    return todosToSort
}