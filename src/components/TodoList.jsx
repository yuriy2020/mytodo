import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {

	render() {
		return (
			<div>
				<ul>
					{this.props.todos.map((todo) => {
						return <li key={todo.id}>
							<TodoItem {...todo} //деструктурир все элементы которые есть в {todo}
								onDeleted={this.props.onDeleted}
								onMark={this.props.onMark}
								onDoneItem={this.props.onDoneItem}
							/></li>
					})}

				</ul>

			</div>
		)
	}
}
