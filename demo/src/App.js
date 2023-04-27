import React, { useState } from 'react';
import './App.css';
import './component/ToDoComponent';
import './component/TodoTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoTable from './component/TodoTable';
import NewTodoForm from './component/NewTodoForm';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [data, setData] = useState([
    {
      rowNumber: 1,
      rowAss: 'User One',
      rowDes: 'Feed Bubby',
    },
    {
      rowNumber: 2,
      rowDes: 'Water Plant',
      rowAss: 'User Two'
    },
    {
      rowNumber: 3,
      rowDes: 'Lovely Cat',
      rowAss: 'User Three'
    },
    {
      rowNumber: 4,
      rowDes: 'Lovely Dog',
      rowAss: 'User Four'
    },
    {
      rowNumber: 5,
      rowDes: 'Lovely Cat',
      rowAss: 'User Five'
    }
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (data.length > 0) {
      rowNumber = data[data.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDes: description,
      rowAss: assigned
    };
    // data.push(newTodo);
    setData(todo => [...todo, newTodo]);
  }

  const deleteTodo = (rowNumber) => {
    let deleteArr = data.filter((tmp) => tmp.rowNumber != rowNumber);
    setData(deleteArr);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          {/* <table className="table table-hover">
            <thead>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </thead>
            <tbody>
              <ToDoRowItem {...data[0]} />
              <ToDoRowItem {...data[1]} />
              <ToDoRowItem {...data[2]} />
            </tbody>
          </table> */}
          <TodoTable data={data} deleteTodo={deleteTodo} />
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className="btn btn-primary">
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>

        </div>
        <div className="card-body">
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />} // this is call react conditional rendering
        </div>
      </div>
    </div>
  );
}

export default App;
