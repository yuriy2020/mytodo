import React, { Component } from 'react'

export default class TodoItem extends Component {
	render() {
		let { label,id,done,important } = this.props
		let classNameItem = ''

		if (done) classNameItem += ' done'
		if (important) classNameItem += ' important'

		return (
			<div className={classNameItem}>
				<span onClick={()=>this.props.onDoneItem(id)}>
					{label} </span>
				<button className='mark' onClick={()=>this.props.onMark(id)}>!!!</button>
				<button className='del' onClick={()=>this.props.onDeleted(id)}>Del</button>
			</div>
		)
	}
}	
