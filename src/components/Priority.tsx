import {MouseEvent} from 'react'
import './Priority.css'

export interface Props {
    priority: number
    onClick: (event: MouseEvent<HTMLLabelElement>) => void
}

export const idPriority1 ="Priority_1"
export const idPriority2 ="Priority_2"
export const idPriority3 ="Priority_3"


export const Priority = ({ priority, onClick }: Props) => {

    const flash = '\uD83D\uDDF2'

    return (
        <div className="Priority">
            <label className={priority >= 1 ? "ActivePriority" : "InactivePriority"} id={idPriority1} onClick={onClick}>{flash}</label>
            <label className={priority >= 2 ? "ActivePriority" : "InactivePriority"} id={idPriority2} onClick={onClick}>{flash}</label>
            <label className={priority === 3 ? "ActivePriority" : "InactivePriority"} id={idPriority3} onClick={onClick}>{flash}</label>
        </div>
    )
}