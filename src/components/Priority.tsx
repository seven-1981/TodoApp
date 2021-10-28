import {MouseEvent, useState} from 'react'
import './Priority.css'


export const Priority = () => {

    const [priority, setPriority] = useState(2)

    const idPriority1 ="Priority_1"
    const idPriority2 ="Priority_2"
    const idPriority3 ="Priority_3"

    const flash = '\uD83D\uDDF2'

    const onClick = (event: MouseEvent<HTMLLabelElement>) => {
        let idClicked = event.currentTarget.id
        console.log("Priority : " + idClicked)

        let priorityToSet = 1
        if (idClicked === idPriority2) {
            priorityToSet = 2
        } else if (idClicked === idPriority3) {
            priorityToSet = 3
        }

        setPriority(priorityToSet)
    }

    return (
        <div className="Priority">
            <label className={priority >= 1 ? "ActivePriority" : "InactivePriority"} id={idPriority1} onClick={onClick}>{flash}</label>
            <label className={priority >= 2 ? "ActivePriority" : "InactivePriority"} id={idPriority2} onClick={onClick}>{flash}</label>
            <label className={priority === 3 ? "ActivePriority" : "InactivePriority"} id={idPriority3} onClick={onClick}>{flash}</label>
        </div>
    )
}