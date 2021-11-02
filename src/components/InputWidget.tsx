import {ChangeEvent} from 'react'
import './InputWidget.css'

interface Props {
    inputText: string
    onAddButtonClick: () => void
    onInputFieldChange: (event: ChangeEvent<HTMLInputElement>) => void
    onShowAllCheckBoxChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputWidget = ({ inputText, onAddButtonClick, onInputFieldChange, onShowAllCheckBoxChange }: Props) => {

    return (
        <div className="InputWidget">
            <input
                className="InputField"
                type="text"
                onChange={onInputFieldChange}
                value={inputText}
            />
            <button
                className="AddButton"
                onClick={onAddButtonClick}>
                Hinzufügen
            </button>
            <label
                className="ShowAllCheckBox">
                <input
                    type="checkbox"
                    onChange={onShowAllCheckBoxChange} />
                Alle anzeigen
            </label>
        </div>
    )
}