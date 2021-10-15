import React, { useState } from "react";
import './InputWidget.css';

function InputWidget() {
    const [inputText, setInputText] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

     const buttonClicked = () => {
        console.log("Button clicked. The text is " + inputText)
     }

    return (
        <div className="InputWidget">
            <input className="InputField" type="text" onChange={handleChange} value={inputText} />
            <button className="AddButton" onClick={buttonClicked}>
                Hinzufügen
            </button>
            <label>
                Alle anzeigen
                <input className="DoneCheckBox" type="checkbox" onChange={buttonClicked} />
            </label>
        </div>
    )
}

export default InputWidget;