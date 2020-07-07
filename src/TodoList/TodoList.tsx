import React, { ReactElement } from 'react'
import { TodoModel } from '../model'
import {Todo} from '../Todo/Todo'
import { withTodoChange } from '../TodoChangeHOC'

interface TodoListProps {
	todos: TodoModel[]
	onTodoChange: (t: TodoModel) => void
}

export const TodoList = withTodoChange('TODOLIST', function (props: TodoListProps): ReactElement {
	const f = (t: TodoModel) => {
		// console.log('change TODOLIST')
		props.onTodoChange(t)
	}
	return <ul>{props.todos.map(t => <li key={t.id}><Todo todo={t} onTodoChange={f}></Todo></li>)}</ul>
})