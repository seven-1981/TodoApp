import React from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputField from "./components/InputWidget";
import TodoList from "./components/TodoList";

function App() {

    const addButtonClickedEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button event fired!")
    }

    const inputFieldChangedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value
        console.log("Text is now " + text)
    }

  return (
    <div className="App">
        <AppBar />
        <InputField addButtonEvent={addButtonClickedEvent} textChangedEvent={inputFieldChangedEvent}/>
        <TodoList />
    </div>
  );
}

export default App;
