import React, { ReactElement } from 'react'
import { TodoModel } from '../model'
import './Todo.css'

interface TodoProps {
	todo: TodoModel
}

interface TodoState {
	completed: boolean
}

export class Todo extends React.Component<TodoProps, TodoState> {
	constructor(props: TodoProps) {
		super(props)
		this.state = {
			completed: props.todo.completed
		}
		// this.setState({
		// 	completed: true
		// })
	}

	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const completed = e.target.checked
		this.setState({completed: completed})
	}

	render(): ReactElement {
		const t = this.props.todo
		return <div className={t.completed ? 'completed' : 'not-completed'}>
			<input type="checkbox" checked={this.state.completed} onChange={this.onChange} />
			{t.title}
		</div>
	}
}
// export function Todo(props: TodoProps): ReactElement {
// }