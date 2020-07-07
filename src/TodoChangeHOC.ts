import React from 'react'
import { TodoModel } from './model';

interface TodoChangeProps {
	onTodoChange: (todo: TodoModel) => void
}

export function withTodoChange<P extends TodoChangeProps>(message: string, component: React.ComponentType<P>): React.ComponentType<P> {
	return function(props: P) {
		const newProps: P = {
			...props,
			onTodoChange(todo: TodoModel): void {
				console.log('onTodoChange', message)
				props.onTodoChange(todo)
			}
		}
		return React.createElement(component, newProps)
	}
}