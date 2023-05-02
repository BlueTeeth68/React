import React, { useState } from 'react';
import './App.css';
import './component/ToDoComponent';
import './component/TodoTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoTable } from './component/TodoTable';
import { NewTodoForm } from './component/NewTodoForm';
import { TodoModel } from './model/TodoModel';

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [data, setData] = useState([
    new TodoModel(1, 'Feed Bubby', 'User One'),
    new TodoModel(2, 'Water Plant', 'User Two'),
    new TodoModel(3, 'Lovely Cat', 'User Three'),
    new TodoModel(4, 'Lovely Dog', 'User Four'),
    new TodoModel(5, 'Lovely Cat', 'User Five'),
  ]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber: number = 0;
    if (data.length > 0) {
      rowNumber = data[data.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo: TodoModel = new TodoModel(rowNumber, description, assigned);
    // data.push(newTodo);
    setData(todo => [...todo, newTodo]);
  }

  const deleteTodo = (rowNumber: number) => {
    let deleteArr: TodoModel[] = data.filter((tmp) => tmp.rowNumber != rowNumber);
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
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />} {/* this is call react conditional rendering*/}
        </div>
      </div>
    </div>
  );
}
