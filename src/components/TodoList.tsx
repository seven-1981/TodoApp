import React from "react";
import './TodoList.css';
import Todo, {TodoProps} from "./Todo";

interface TodoListProps {
    todolist: TodoProps[]
}

function TodoList(props: TodoListProps) {

    return (
        <>
            {props.todolist.length ?
                props.todolist.map(todo => (<Todo
                    name={todo.name}
                    done={todo.done}
                    id={todo.id}
                    key={todo.id}
                    toggle={todo.toggle}
                    delete={todo.delete} />)) :
                <p>Keine Todos gefunden</p>}
        </>
    )
}

export default TodoList;