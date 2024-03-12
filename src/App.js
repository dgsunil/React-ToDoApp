import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/ToDoTable';

function App() {

  const [todos, setToDos] = useState([
    { rowNumber: 1, rowDescription: 'Hello World', rowAssigned: 'Self' },
    { rowNumber: 2, rowDescription: 'Heelo is good', rowAssigned: 'Self2' },
    { rowNumber: 3, rowDescription: 'Hello ', rowAssigned: 'Self' },
    { rowNumber: 4, rowDescription: ' World', rowAssigned: 'Self' }
  ])

  const addTodo = () => {
    //console.log("Button is clicked");
    //alert("Button is clicked");

    if(todos.length >0){
      const newTodo = {
        rowNumber: todos.length+1,
        rowDescription: "Data " + (todos.length+1),
        rowAssigned: "Self " + (todos.length+1)
      }

      //todos.push(newTodo)
      setToDos(todos => [...todos, newTodo])
      // console.log(todos)
    }
  }


  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>Add New ToDo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
