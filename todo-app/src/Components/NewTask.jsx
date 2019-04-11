import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask } from '../actions/index';

import { MDBCol, MDBBtn, MDBInput } from "mdbreact";

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				task: "",
				priority: props.initalPriority
			}
		};
	}

	updateHandler = e => {
		this.setState({
			inputs: {
				...this.state.inputs,
				[e.target.name]: e.target.value
			}
		});
  };
  
  submitFormHandler = e =>{
    e.preventDefault();
    this.props.addTask(this.state.inputs);
    this.setState({
      inputs:{
        ...this.state.inputs,
        task: '',
      }
    })
  }

	render() {
		return (
			<MDBCol className='text-center mt-5'>
				<form onSubmit={this.submitFormHandler}>
					<h3>Add A Task</h3>
					<MDBInput
						label='Task'
						value={this.state.inputs.task}
						onChange={this.updateHandler}
						type='text'
						name='task'
            validate
            required
						group
					/>
					<select
						className='browser-default custom-select'
						name='priority'
            onChange={this.updateHandler}
					>
						<option value='1' >Normal</option>
						<option value='2'>Important</option>
						<option value='3'>Urgent</option>
					</select>
					<MDBBtn type='submit'>Add Task</MDBBtn>
				</form>
			</MDBCol>
		);
	}
}

const stateToProps = state => ({
	initalPriority: state.initalPriority
});

export default connect(stateToProps, { addTask })(TaskForm);
