import React from "react";
import './TodoList.css';
import Todo, {CreateTodoProps} from "./Todo";

interface TodoListProps {
    todos: CreateTodoProps[]
    setTodos: React.Dispatch<React.SetStateAction<CreateTodoProps[]>>
}

function TodoList({todos, setTodos}: TodoListProps) {

    const deleteTodoWithID = (id: number) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    let todoList = todos.map( todo => {
            return (
                <Todo text={todo.text} id={todo.id} key={todo.id} passedDeleteHandler={deleteTodoWithID} />
            )})

    return (
        <div className="TodoList">
            {todoList}
        </div>
    );
}

export default TodoList;