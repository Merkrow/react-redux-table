import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import Item from './Item';

/*  
	this.props.updateStudent could be false (form is not visible), true (form is visible for adding new Student), 
	number (form is visible for editing current element)
*/

const Students = React.createClass({
	render() {
		return <div>
				<button onClick={ e => this.props.actions.showAddStudent() }>Add Student</button>
					{ this.props.updateStudent && 
					typeof this.props.updateStudent === "boolean" && 
					<AddItem addStudent={(name, department, status) => this.props.actions.addStudent(name, department, status)} 
							 hideAdd={() => this.props.actions.hideAddStudent()} />}
					{ this.props.updateStudent && 
					typeof this.props.updateStudent === "number" && 
					<AddItem changeId={this.props.updateStudent} 
							 remove={id => this.props.actions.remove(id)}
							 item={this.props.students.students[this.props.updateStudent-1]}
							 changeStudent={(id, name, department, status) => this.props.actions.changeStudent(id, name, department, status)}
							 hideAdd={() => this.props.actions.hideAddStudent()} />}
					<div>
						{ !this.props.updateStudent && this.props.students.students.map((item) => {
								return <Item key={item.id} item={item}
								toggleChange={id => this.props.actions.toggleChange(id)}
								remove={(id) => this.props.actions.remove(id)} />
							}
						)}
					</div>
			</div>
	}
})

export default Students;