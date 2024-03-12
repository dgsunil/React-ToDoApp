import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';

function App() {

  const [showAddToDoForm, setShowAddTodoForm] = useState(false);

  const [todos, setToDos] = useState([
    { rowNumber: 1, rowDescription: 'Hello World', rowAssigned: 'Self' },
    { rowNumber: 2, rowDescription: 'Heelo is good', rowAssigned: 'Self2' },
    { rowNumber: 3, rowDescription: 'Hello ', rowAssigned: 'Self' },
    { rowNumber: 4, rowDescription: ' World', rowAssigned: 'Self' }
  ])

  const addTodo = (assigned, description) => {
    //console.log("Button is clicked");
    //alert("Button is clicked");

    let rowNumber = 1;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }


    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }

    //todos.push(newTodo)
    setToDos(todos => [...todos, newTodo])
    // console.log(todos)
  }

  const deleteTodo = (deleteToDoRowNumber) => {
     let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteToDoRowNumber;
     });

     setToDos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddToDoForm)}>
            {/* Add New ToDo */}
            {showAddToDoForm ? 'Close form' : 'Add new ToDo'}
            </button>
          {showAddToDoForm && 
          <NewToDoForm addTodo={addTodo} showAddToDoForm={setShowAddTodoForm} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
