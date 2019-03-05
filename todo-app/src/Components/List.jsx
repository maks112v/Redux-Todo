import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props){
    super(props);
  }

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Test</h1>
				{this.props.tasks.map(el => (
					<div key={el.id}>{el.name}</div>
				))}
			</div>
		);
	}
}

const stateToProps = state => ({
	tasks: state.tasks
});

export default connect(stateToProps)(TodoList);
