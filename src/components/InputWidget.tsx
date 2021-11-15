import {ChangeEvent} from "react"
import "./InputWidget.css"
import "../App.css"


interface Props {
    inputText: string
    onSetInputText: (text: string) => void
    onAddNewTodoSuccess: () => boolean
    showAll: boolean
    onSetShowAll: (showAll: boolean) => void
    sortByPriority: boolean
    onSetSortByPriority: (sortByPriority: boolean) => void
}

export const InputWidget = ({ inputText, onSetInputText, onAddNewTodoSuccess, showAll, onSetShowAll, sortByPriority, onSetSortByPriority }: Props) => {

    const addButtonClickEvent = () => {
        if (inputText === "") return
        if (!onAddNewTodoSuccess()) return
        onSetInputText("")
    }

    const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        onSetInputText(event.target.value)
    }

    const toggleShowAllCheckBoxEvent = (event: ChangeEvent<HTMLInputElement>) => {
        onSetShowAll(event.target.checked)
    }

    const toggleSortByPriorityCheckBoxEvent = (event: ChangeEvent<HTMLInputElement>) => {
        onSetSortByPriority(event.target.checked)
    }

    return (
        <div className="InputWidget">
            <input type="text" onChange={inputFieldChangeEvent}
                value={inputText} placeholder="Was ist zu tun ?"
            />
            <button onClick={addButtonClickEvent}>
                Hinzufügen
            </button>
            <label>
                <input type="checkbox" checked={showAll} onChange={toggleShowAllCheckBoxEvent}/>
                Alle anzeigen
            </label>
            <label>
                <input type="checkbox" checked={sortByPriority} onChange={toggleSortByPriorityCheckBoxEvent}/>
                Nach Priorität sortieren
            </label>
        </div>
    )
}