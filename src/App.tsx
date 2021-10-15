import React from 'react';
import './App.css';
import AppBar from "./components/AppBar";
import InputField from "./components/InputWidget";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="App">
        <AppBar />
        <InputField />
        <TodoList />
    </div>
  );
}

export default App;
