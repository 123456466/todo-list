import { useState } from 'react';
import './App.css'

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

const App = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS)

  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (event) =>{
    setNewTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!newTodo.trim()){
      return ;
    }

    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo}]);
    setNewTodo('')
  }

  return <div className='todo-list'>
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      value={newTodo}
      onChange={handleInputChange}
      placeholder='내용을 적어주세요.'
      />
      <button>추가하기</button>
    </form>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    </div>
}

export default App