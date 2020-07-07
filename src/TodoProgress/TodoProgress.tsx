import React, { ReactElement } from 'react'
import { TodoModel } from '../model'

interface TodoProgressProps {
	todos: TodoModel[]
}

export function TodoProgress(props: TodoProgressProps): ReactElement {
	const nbCompleted = props.todos.reduce(function(acc, value) {
		return acc + Number(value.completed)
	}, 0)
	const percent = nbCompleted / props.todos.length * 100
	return <div>{percent}% completed</div>
}