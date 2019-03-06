import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBListGroup } from "mdbreact";
import Task from './Task';

import { toggleTask } from '../actions/index';


class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Current Tasks</h1>
				<MDBListGroup style={{ width: "22rem" }}>
          {this.props.tasks.map(el => (
            <Task key={el.id} task={el} toggleTask={this.props.toggleTask} />
          ))}
				</MDBListGroup>
			</div>
		);
	}
}

const stateToProps = state => ({
	tasks: state.tasks
});

export default connect(stateToProps, { toggleTask })(TodoList);
