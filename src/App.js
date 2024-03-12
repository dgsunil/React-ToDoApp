import './App.css';
import TodoRowItem from './components/ToDoRowItem';
import TodoTable from './components/ToDoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Hello World', rowAssigned: 'Self' },
    { rowNumber: 2, rowDescription: 'Heelo is good', rowAssigned: 'Self2' }
  ]


  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
