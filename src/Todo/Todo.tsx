import React, { ReactElement } from 'react'
import { TodoModel } from '../model'
import './Todo.css'
import { withTodoChange } from '../TodoChangeHOC'

interface TodoProps {
	todo: TodoModel,
	onTodoChange: (t: TodoModel) => void
}

interface TodoState {
	completed: boolean
}

// export class Todo extends React.Component<TodoProps, TodoState> {
// 	constructor(props: TodoProps) {
// 		super(props)
// 		this.state = {
// 			completed: props.todo.completed
// 		}
// 	}

// 	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const completed = e.target.checked
// 		this.setState({completed: completed})
// 	}

// 	render(): ReactElement {
// 		const t = this.props.todo
// 		return <div className={this.state.completed ? 'completed' : 'not-completed'}>
// 			<input type="checkbox" checked={this.state.completed} onChange={this.onChange} />
// 			{t.title}
// 		</div>
// 	}
// }
function TodoComponent(props: TodoProps): ReactElement {
	const t = props.todo
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const completed = e.target.checked
		// console.log('change TODO')
		props.onTodoChange({...t, completed})
	}
	return <div className={props.todo.completed ? 'completed' : 'not-completed'}>
		<input type="checkbox" checked={t.completed} onChange={onChange} />
		{props.todo.title}
	</div>
}

export const Todo = withTodoChange('TODO', TodoComponent)