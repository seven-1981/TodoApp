const { v4: uuidV4 } = require('uuid')

export interface Todo {
    name: String
    done: boolean
    id: number
    priorityLevel: number
}

export const createTodo = (name: string) => {
    return { name: name, done: false, id: uuidV4(), priorityLevel: 2 }
}