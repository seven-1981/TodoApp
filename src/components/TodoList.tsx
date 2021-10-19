import React from "react";
import './TodoList.css';
import Todo, {TodoProps} from "./Todo";

interface TodoListProps {
    todos: TodoProps[]
}

function TodoList(props: TodoListProps) {

    return (
        <>
            {props.todos.length ?
                props.todos.map(todo => (<Todo name={todo.name} done={todo.done} key={todo.key}/>)) :
                <p>Keine Todos gefunden</p>}
        </>
    )
}

export default TodoList;