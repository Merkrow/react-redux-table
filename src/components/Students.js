import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import Item from './Item';

const Students = React.createClass({
	render() {
		return <div>
				<button onClick={ e => this.props.actions.showAddStudent() }>Add Student</button>
					{ this.props.addingStudent && typeof this.props.addingStudent === "boolean" && <AddItem addStudent={(a,b,c) => this.props.actions.addStudent(a,b,c)} hideAdd={() => this.props.actions.hideAddStudent()} />}
					{ this.props.addingStudent && typeof this.props.addingStudent === "number" && <AddItem changeId={this.props.addingStudent} remove={id => this.props.actions.remove(id)} item={this.props.students.students[this.props.addingStudent-1]} changeStudent={(a,b,c,d) => this.props.actions.changeStudent(a,b,c,d)} hideAdd={() => this.props.actions.hideAddStudent()} />}
					<div>
						{ !this.props.addingStudent && this.props.students.students.map((item) => {
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