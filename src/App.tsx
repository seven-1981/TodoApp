import React, {ChangeEvent, useState, useRef} from 'react';
import './App.css';
import './Components/TodoBar.css'
import './Components/TodoLogo.css'
import TodoBar from "./Components/TodoBar";
import TodoLogo from "./Components/TodoLogo";
import InputTodo from "./Components/InputTodo";
import SubmitButton from "./Components/SubmitButton";
import Todo, {createTodo, CreateTodoProps} from "./Components/Todo";
import TodoList from "./Components/TodoList";


function App() {

    const [InputText, setInputText] = useState('')
    const [todos, setTodos] = useState<CreateTodoProps[]>([])
    const [status, setStatus] = useState("All")

    return (
    <div className="App">
        <div className="App-title">
            <TodoBar />
            <TodoLogo />
        </div>
        <div className="Input">
            <InputTodo status={status} setStatus={setStatus} inputText={InputText} setInputText={setInputText} />
            <SubmitButton setTodos={setTodos} todos={todos} inputText={InputText} setInputText={setInputText} />
        </div>
        <div className="TodoList">
            <TodoList setTodos={setTodos} todos={todos} />
        </div>
    </div>
  );
}

export default App;
