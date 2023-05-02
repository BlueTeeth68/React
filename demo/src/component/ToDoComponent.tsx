import React from "react";
import { TodoModel } from "../model/TodoModel";

export const ToDoRowItem: React.FC<{
    todo: TodoModel,
    deleteTodo: Function
}> = (props) => {
    const todo: TodoModel = props.todo;
    return (
        <tr onClick={() => props.deleteTodo(todo.rowNumber)}>
            <th scope="row">{todo.rowNumber}</th>
            <td>{todo.rowDescription}</td>
            <td>{todo.rowAssigned}</td>
        </tr>
    )
}