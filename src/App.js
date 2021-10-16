import React, {useState, useEffect} from 'react';
import {TodoForm,TodoList} from './components';
import './App.css';

const LOCAL_STORAGE_KEY = "react-todo";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  useEffect(() => {
    const todosStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(todosStorage){
      setTodos(todosStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  function toggleComplete(id){
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))
  }

  function removeTodo(removeById){
    setTodos(todos.filter(todo => todo.id !== removeById));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="todo-title">React Todo</p>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
