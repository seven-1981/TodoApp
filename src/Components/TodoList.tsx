import React from "react";
import './TodoList.css';
import Todo, {CreateTodoProps} from "./Todo";

interface TodoListProps {
    todos: CreateTodoProps[]
    setTodos: React.Dispatch<React.SetStateAction<CreateTodoProps[]>>
}

function TodoList({todos, setTodos}: TodoListProps) {

    let todoList = todos.map( todo => {
            return (
                <Todo text={todo.text} id={todo.id} todos={todos} setTodos={setTodos} />
            )})

    return (
        <div className="TodoList">
            {todoList}
        </div>
    );
}

export default TodoList;