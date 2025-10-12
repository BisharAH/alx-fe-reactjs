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