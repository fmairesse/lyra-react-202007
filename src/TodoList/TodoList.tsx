import React, { ReactElement } from 'react'
import { TodoModel } from '../model'
import {Todo} from '../Todo/Todo'

interface TodoListProps {
	todos: TodoModel[]
}

export function TodoList(props: TodoListProps): ReactElement {
	return <ul>{props.todos.map(t => <li key={t.id}><Todo todo={t}></Todo></li>)}</ul>
}