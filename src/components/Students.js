import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import Item from './Item';

const Students = React.createClass({
	render() {
		return <div>
				<button onClick={ e => this.props.actions.showAddStudent() }>Add Student</button>
					{ this.props.addingStudent && <AddItem addStudent={(a,b,c) => this.props.actions.addStudent(a,b,c)} hideAdd={() => this.props.actions.hideAddStudent()} />}
					<div>
						{ this.props.students.map((item) => {
							return <Item key={item.id} item={item}
							toggleChange={id => this.props.actions.toggleChange(id)}
							changeStudent={(a,b,c,d) => this.props.actions.changeStudent(a,b,c,d)}
							remove={(id) => this.props.actions.remove(id)} />
							}
						)}
					</div>
			</div>
	}
})

export default Students;