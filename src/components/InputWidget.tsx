import React, { useState } from "react";
import './InputWidget.css';

interface Props {
    addButtonEvent: React.MouseEventHandler<HTMLButtonElement>
    textChangedEvent: React.ChangeEventHandler<HTMLInputElement>
}

function InputWidget(props: Props) {
    //const [inputText, setInputText] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setInputText(event.target.value)
    }


    return (
        <div className="InputWidget">
            <input className="InputField" type="text" onChange={props.textChangedEvent} />
            <button className="AddButton" onClick={props.addButtonEvent}>
                Hinzufügen
            </button>
            <label>
                Alle anzeigen
                <input className="DoneCheckBox" type="checkbox" onChange={handleChange} />
            </label>
        </div>
    )
}

export default InputWidget;