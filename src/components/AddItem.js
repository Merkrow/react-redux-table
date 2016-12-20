import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const AddItem = React.createClass({
	componentDidMount() {
		var el = ReactDOM.findDOMNode(this.refs.name);
		if (el) el.focus();
	},
	createStudent() {
		let name = ReactDOM.findDOMNode(this.refs.name).value;
		let department = ReactDOM.findDOMNode(this.refs.department).value;
		let status = ReactDOM.findDOMNode(this.refs.status).value;
		if(name !== "" && department !== "" && status !== "") {
			this.props.addStudent(name, department, status);
			this.props.hideAdd();
		}
	},
	render() {
		return (
			<div>
				<input ref='name'/>
				<input ref='department' />
				<select ref='status'>
					<option>red</option>
					<option>green</option>
					<option>yellow</option>
				</select>
				<button onClick={e => this.createStudent()}>Submit</button>
			</div>
			)
	}
});

export default AddItem;