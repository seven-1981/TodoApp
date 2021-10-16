import React from "react";
import './TodoList.css';
import Todo, {TodoProps} from "./Todo";

export interface TodoListProps {
    todos: TodoProps[]
}

function TodoList(props: TodoListProps): JSX.Element {

    return (
        <>
            {props.todos.map(todo => (
                <Todo name={todo.name} done={todo.done} />
            ))}
        </>
    )
}

export default TodoList;