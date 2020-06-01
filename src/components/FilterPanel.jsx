import React, { Component } from 'react'

export default class FilterPanel extends Component {

	

	render() {
		return (
			<div>
				<button name='All' onClick={(event)=>this.props.filterNotes(event)}>All</button>
				<button name='Active' onClick={(event)=>this.props.filterNotes(event)}>Active</button>
				<button name='Done' onClick={(event)=>this.props.filterNotes(event)}>Done</button>
			</div>
		)
	}
}