import React, { ReactElement } from 'react'
import { TodoModel } from '../model'
import './Todo.css'

interface TodoProps {
	todo: TodoModel
}

export function Todo(props: TodoProps): ReactElement {
	return <div className={props.todo.completed ? 'completed' : 'not-completed'}>
		<span>{props.todo.completed ? '☑' : '☐'}</span>
		{props.todo.title}
	</div>
}