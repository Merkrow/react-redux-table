import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Item = React.createClass({
	componentDidUpdate() {
		if(this.refs.n && this.refs.d && this.refs.s) {
			this.refs.n.value = this.props.item.name;
			this.refs.d.value = this.props.item.department;
			this.refs.s.value = this.props.item.status;
		}
	},
	changeStudent(id) {
		let name = ReactDOM.findDOMNode(this.refs.n).value;
		let department = ReactDOM.findDOMNode(this.refs.d).value;
		let status = ReactDOM.findDOMNode(this.refs.s).value;
		if(name !== "" && department !== "" && status !== "") {
			this.props.changeStudent(id, name, department, status);
		}
	},
	render() {
		const item = this.props.item;
		if(!item.change) {
			return (
				<div>
					<span>{item.id}</span><span>{item.name}</span><span>{item.department}</span><span style={{ backgroundColor: item.status }}>{item.status}</span><button onClick={() => this.props.toggleChange(item.id)}>change</button>
				</div>
			)
		}
		return (
			<div>
				<input ref='n' />
				<input ref='d' />
				<select ref='s'>
					<option>red</option>
					<option>green</option>
					<option>yellow</option>
				</select>
				<button onClick={(e) => this.props.remove(item.id)}>DELETE</button>
				<button onClick={(e) => this.changeStudent(item.id)}>Submit</button>
			</div>
		)
	}
})

export default Item;