// src/AddTodoForm.js

import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!newTodo.trim()) return; // Don't add empty todos
    addTodo(newTodo); // Call the function passed from App.js
    setNewTodo(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;