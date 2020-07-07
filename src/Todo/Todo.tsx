import React, { ReactElement } from 'react'
import { TodoModel } from '../model'

interface TodoProps {
	todo: TodoModel
}

export function Todo(props: TodoProps): ReactElement {
	return <div>
		<span>{props.todo.completed ? '☑' : '☐'}</span>
		{props.todo.title}
	</div>
}