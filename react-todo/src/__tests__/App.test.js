import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('TodoList Component', () => {

  // Test 1: Initial Render
  test('renders the initial list of todos', () => {
    render(<App />);
    
    // Check if the initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Test the App')).toBeInTheDocument();
  });

  // Test 2: Adding a New Todo
  test('allows users to add a new todo', () => {
    render(<App />);
    
    // Find the input field and the add button
    const inputElement = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Simulate user typing a new todo
    fireEvent.change(inputElement, { target: { value: 'Deploy the App' } });
    
    // Simulate clicking the add button
    fireEvent.click(addButton);
    
    // Check if the new todo is now in the document
    expect(screen.getByText('Deploy the App')).toBeInTheDocument();
  });

  // Test 3: Toggling a Todo's Status
  test('allows users to toggle a todo between completed and not completed', () => {
    render(<App />);
    
    // Find the first todo item by its text
    const todoItem = screen.getByText('Learn React');
    
    // Verify it does not have the 'completed' class initially
    expect(todoItem.parentElement).not.toHaveClass('completed');
    
    // Simulate clicking the todo item to mark it as completed
    fireEvent.click(todoItem);
    
    // Verify it now has the 'completed' class (strikethrough)
    expect(todoItem.parentElement).toHaveClass('completed');
    
    // Simulate clicking it again to toggle it back
    fireEvent.click(todoItem);
    
    // Verify the 'completed' class is removed
    expect(todoItem.parentElement).not.toHaveClass('completed');
  });

  // Test 4: Deleting a Todo
  test('allows users to delete a todo', () => {
    render(<App />);
    
    // Find the todo item we want to delete
    const todoTextToDelete = 'Build a Todo App';
    const todoItem = screen.getByText(todoTextToDelete);
    
    // Find the delete button associated with that todo item
    // The button is a sibling of the span element containing the text
    const deleteButton = todoItem.nextElementSibling;
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    
    // Verify the todo item is no longer in the document
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});