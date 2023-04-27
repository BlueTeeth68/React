function ToDoRowItem(props) {
    return(
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDes}</td>
            <td>{props.rowAss}</td>
        </tr>
    )
}

export default ToDoRowItem;