import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const AddItem = React.createClass({
	componentDidMount() {
		var el = ReactDOM.findDOMNode(this.refs.name);
		if (el) el.focus();
		if(this.props.changeId) {
			this.refs.name.value = this.props.item.name;
			this.refs.department.value = this.props.item.department;
			this.refs.status.value = this.props.item.status;
		}
	},
	updateStudent(id) {
		let name = ReactDOM.findDOMNode(this.refs.name).value;
		let department = ReactDOM.findDOMNode(this.refs.department).value;
		let status = ReactDOM.findDOMNode(this.refs.status).value;
		if(name !== "" && department !== "" && status !== "") {
			if(id) {
				this.props.changeStudent(id, name, department, status);
			} else {
				this.props.addStudent(name, department, status);
			}
			this.props.hideAdd();
		}
	},
	remove(id) {
		this.props.remove(id);
		this.props.hideAdd();
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
					{ !this.props.changeId && <button onClick={e => this.updateStudent()}>Submit</button> }
					{ this.props.changeId && <div><button onClick={ e => this.updateStudent(this.props.changeId) }>Submit</button>
					<button onClick={ e => this.remove(this.props.changeId) }>DELETE</button></div> }
				</div>
				)
	}
});

export default AddItem;