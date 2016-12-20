import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import Item from './Item';

const Students = React.createClass({
	render() {
		return <div>
				<button onClick={ e => this.props.showAddStudent() }>Add Student</button>
					{ this.props.addingStudent && <AddItem addStudent={(a,b,c) => this.props.addStudent(a,b,c)} hideAdd={() => this.props.hideAddStudent()} />}
					<div>
						{ this.props.students.map((item) => {
							return <Item item={item}
							toggleChange={id => this.props.toggleChange(id)}
							changeStudent={(a,b,c,d) => this.props.changeStudent(a,b,c,d)}
							remove={(id) => this.props.remove(id)} />
							}
						)}
					</div>
			</div>
	}
})

export default Students;