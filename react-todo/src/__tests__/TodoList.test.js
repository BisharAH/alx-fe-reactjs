import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Make sure this path is correct

describe('TodoList Component', () => {

  test('renders the initial list of todos', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(inputElement, { target: { value: 'Deploy the App' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Deploy the App')).toBeInTheDocument();
  });

  test('allows users to toggle a todo', () => {
    render(<App />);
    const todoItem = screen.getByText('Learn React');
    
    expect(todoItem.parentElement).not.toHaveClass('completed');
    fireEvent.click(todoItem);
    expect(todoItem.parentElement).toHaveClass('completed');
  });

  test('allows users to delete a todo', () => {
    render(<App />);
    const todoTextToDelete = 'Build a Todo App';
    const todoItem = screen.getByText(todoTextToDelete);
    const deleteButton = todoItem.nextElementSibling;
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});