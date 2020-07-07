import React from 'react';
import './App.css';
import todos from './todos.json';
import { TodoList } from './TodoList/TodoList'
import { TodoProgress } from './TodoProgress/TodoProgress'
import { TodoModel } from './model';

interface AppState {
  todos: TodoModel[]
}

export class App extends React.Component<{}, AppState> {
  state = {
    todos,
    foo: 'FOO'
  }
  onTodoChange = (todo: TodoModel) => {
    console.log('change APP')
    const todoToUpdate: TodoModel | undefined = this.state.todos.find(t => t.id === todo.id)
    if (todoToUpdate)
      todoToUpdate.completed = todo.completed
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    const tt: TodoModel[] = this.state.todos
    return <div>
      <TodoProgress todos={tt} />
      <TodoList todos={tt} onTodoChange={this.onTodoChange} />
    </div>
  }
}

// function App() {
//   const tt: TodoModel[] = todos
//   return <div>
//     <TodoProgress todos={tt} />
//     <TodoList todos={tt} onTodoChange={function (todo: TodoModel) {
//       console.log('change APP')
//       const todoToUpdate: TodoModel | undefined = tt.find(t => t.id === todo.id)
//       if (todoToUpdate)
//         todoToUpdate.completed = todo.completed
//     }} />
//   </div>
// }

export default App;
