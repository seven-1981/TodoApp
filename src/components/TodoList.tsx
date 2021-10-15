import React, { useState } from "react";
import './TodoList.css';
import Todo from "./Todo";


function TodoList() {

    return (
        <Todo name="test" done={false} />
    )
}

export default TodoList;