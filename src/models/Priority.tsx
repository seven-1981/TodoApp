const { v4: uuidV4 } = require("uuid")

export interface Priority {
    priority: number
    priorityId: string
}

export const priorities: Priority[] = [
    { priority: 0, priorityId: uuidV4().toString() },
    { priority: 1, priorityId: uuidV4().toString() },
    { priority: 2, priorityId: uuidV4().toString() }
]

export const priorityFlash = "\uD83D\uDDF2"