import {ChangeEvent} from "react"
import "./InputWidget.css"

interface Props {
    inputText: string
    onAddButtonClick: () => void
    onInputFieldChange: (event: ChangeEvent<HTMLInputElement>) => void
    onShowAllCheckBoxChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSortByPriorityCheckBoxChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputWidget = ({ inputText, onAddButtonClick, onInputFieldChange, onShowAllCheckBoxChange, onSortByPriorityCheckBoxChange }: Props) => {

    return (
        <div className="InputWidget">
            <input className="InputField"
                type="text"
                onChange={onInputFieldChange}
                value={inputText} placeholder="Was ist zu tun ?"
            />
            <button className="AddButton"
                onClick={onAddButtonClick}>
                Hinzufügen
            </button>
            <label className="ShowAllCheckBox">
                <input
                    type="checkbox"
                    onChange={onShowAllCheckBoxChange} />
                Alle anzeigen
            </label>
            <label className="ShowAllCheckBox">
                <input
                    type="checkbox"
                    onChange={onSortByPriorityCheckBoxChange} />
                Nach Priorität sortieren
            </label>
        </div>
    )
}