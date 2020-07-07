import React from 'react';
import './App.css';
import { Todo } from './Todo/Todo';
import todos from './todos.json';


function App() {
  return <>{todos.map(t => <Todo todo={t}></Todo>)}</>
}

export default App;
