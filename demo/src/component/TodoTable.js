import ToDoRowItem from "./ToDoComponent";

function TodoTable(props) {
    const data = props.data;
    const rowData = [];
    for (let i = 0; i < data.length; i++) {
        if (i == 10) {
            rowData.push(<p>Number of element exceeds 10</p>)
            break;
        }
        rowData.push(<ToDoRowItem key={data[i].rowNumber} {...data[i]} deleteTodo={props.deleteTodo}/>);
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.map((tmp) => <ToDoRowItem key={tmp.rowNumber} {...tmp} />)} */}
                {rowData}
            </tbody>
        </table>
    )
}

export default TodoTable;