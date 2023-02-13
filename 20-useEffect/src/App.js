import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log('Callback in useEffect called');
    fetch('https://jsonplaceholder.typicode.com/todos/42')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('counter');
  console.log(todo);

  return <div className="App">{!!todo && <h2>{todo.title}</h2>}</div>;
}

export default App;
