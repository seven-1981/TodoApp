import React from 'react';
import './App.css';
import './TodoBar.css'
import './TodoLogo.css'
import TodoBar from "./TodoBar";
import TodoLogo from "./TodoLogo";

function App() {
  return (
    <div className="App">
        <div className="App-title">
            <TodoBar />
            <TodoLogo />
        </div>
    </div>
  );
}

export default App;
