import React from "react";
import './InputWidget.css';

interface Props {
    addButtonClickedEvent: React.MouseEventHandler<HTMLButtonElement>
    inputFieldChangedEvent: React.ChangeEventHandler<HTMLInputElement>
    showAllCheckBoxChangedEvent: React.ChangeEventHandler<HTMLInputElement>

    inputText: string
}

function InputWidget(props: Props) {

    return (
        <div className="InputWidget">
            <input className="InputField" type="text" onChange={props.inputFieldChangedEvent} value={props.inputText} />
            <button className="AddButton" onClick={props.addButtonClickedEvent}>
                Hinzufügen
            </button>
            <label>
                Alle anzeigen
                <input className="ShowAllCheckBox" type="checkbox" onChange={props.showAllCheckBoxChangedEvent} />
            </label>
        </div>
    )
}

export default InputWidget;