import React from 'react';
import './App.css';
import todos from './todos.json';
import { TodoList } from './TodoList/TodoList'
import { TodoProgress } from './TodoProgress/TodoProgress'
import { TodoModel } from './model';


function App() {
  const tt: TodoModel[] = todos
  return <div>
    <TodoProgress todos={tt} />
    <TodoList todos={tt} />
  </div>
}

export default App;
