import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
   
   const [todos, setTodos] = useState([]);

   useEffect(() => {
 
     fetch('http://localhost:8080/api/todos')
          .then((response) => response.json())
          .then((data) => setTodos(data))
          .catch((error) => console.log(error))

   },[])

  const addTodo = async (text) => {

    const newTodo =
    { 
           text: text,
           iscompleted: false
    }
    
    fetch('http://localhost:8080/api/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
     })
       .then((response) => response.json())
       .then((data) => setTodos(data))
       .catch((error) => console.log(error))
  }

  const editTodo = (id, text) => {

    const updatedToDo = {
      id: id,
      text: text
    }

    fetch('http://localhost:8080/api/todos/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedToDo)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  }

  const completeTodo = id => {
    
    const completedToDo = {
      id: id
    }

    fetch('http://localhost:8080/api/todos/complete', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(completedToDo)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  };

  const deleteTodo = id => {

    const deleteThisToDo = {
      id: id
    }
   
    fetch('http://localhost:8080/api/todos/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteThisToDo)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  };

console.log(todos)
  return (
    <>
      <h2>Todo App</h2>
      <h4>Add new todos via the input field:</h4>
      <TodoForm addTodo = {addTodo} />
      <TodoList 
             todos = {todos} 
             completeTodo={completeTodo}
             deleteTodo = {deleteTodo} 
             editTodo = {editTodo}
      />
    </>
  );
}

export default App;