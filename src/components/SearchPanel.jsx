import React, { Component } from 'react'

export default class SearchPanel extends Component {

	render() {
		return (
			<form>
				<input type='text' placeholder='add todo' onChange={(ev)=>this.props.searchNote(ev)} />
			</form>
		)
	}
}
