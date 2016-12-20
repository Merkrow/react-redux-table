import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { showAddStudent, hideAddStudent, addStudent, toggleChange, changeStudent, remove } from '../actions';
import AddItem from './AddItem';
import Item from './Item';


const mapStateToProps = ({ students, addingStudent }) => ({
	students,
	addingStudent
})

const mapDispatchToProps = dispatch => ({
	addStudent: (name, department, status) => dispatch(addStudent(name, department, status)),
	showAddStudent: () => dispatch(showAddStudent()),
	hideAddStudent: () => dispatch(hideAddStudent()),
	toggleChange: (id) => dispatch(toggleChange(id)),
	changeStudent: (id, name, department, status) => dispatch(changeStudent(id, name, department, status)),
	remove: (id) => dispatch(remove(id))
})

class App extends Component {
	render() {
		return (
			<div>
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
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);