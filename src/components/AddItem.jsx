import React, { Component } from 'react'

export default class AddItem extends Component {
	state = {
		newNote: '',
	}

	inputHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})

	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.addNote(this.state.newNote)
		this.setState({
			newNote:''
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type='text'
					name='newNote'
					onChange={this.inputHandler}
					value={this.state.newNote}

				/>
				<button type='submit'>Add notes</button>
			</form>
		)
	}
}
