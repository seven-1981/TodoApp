import {ChangeEvent} from "react"
import "./InputWidget.css"
import "../App.css"


interface Props {
    inputText: string
    onSetInputText: (text: string) => void
    onAddNewTodoSuccess: () => boolean
    onSetShowAll: (showAll: boolean) => void
    onSetSortByPriority: (sortByPriority: boolean) => void
}

export const InputWidget = ({ inputText, onSetInputText, onAddNewTodoSuccess, onSetShowAll, onSetSortByPriority }: Props) => {

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
            <input className="InputField"
                type="text"
                onChange={inputFieldChangeEvent}
                value={inputText} placeholder="Was ist zu tun ?"
            />
            <button onClick={addButtonClickEvent}>
                Hinzufügen
            </button>
            <label className="ShowAllCheckBox">
                <input type="checkbox" onChange={toggleShowAllCheckBoxEvent}/>
                Alle anzeigen
            </label>
            <label className="ShowAllCheckBox">
                <input type="checkbox" onChange={toggleSortByPriorityCheckBoxEvent}/>
                Nach Priorität sortieren
            </label>
        </div>
    )
}