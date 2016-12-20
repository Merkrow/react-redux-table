import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Students from '../components/Students';

const mapStateToProps = ({ students, addingStudent }) => ({
	students,
	addingStudent
})

const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

class App extends Component {
	render() {
		return (
			<Students {...this.props} />
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);