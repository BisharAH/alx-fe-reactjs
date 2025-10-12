import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Test the App', completed: false },
  ]);

  // State for the new todo input
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (!newTodo.trim()) return; // Don't add empty todos
    const newTodoItem = {
      id: Date.now(), // Unique ID based on timestamp
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo(''); // Clear the input field
  };

  // Function to toggle the 'completed' status of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      
      {/* Add Todo Form */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// src/App.js

import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList'; // <-- IMPORT a
import AddTodoForm from './AddTodoForm'; // <-- IMPORT b

function App() {
  // State is still managed here in the parent component
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Test the App', completed: false },
  ]);

  // All logic that modifies the state stays in the parent component
  const addTodo = (text) => {
    const newTodoItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      
      {/* Render the form component and pass the addTodo function */}
      <AddTodoForm addTodo={addTodo} />
      
      {/* Render the list component and pass the state and functions */}
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;