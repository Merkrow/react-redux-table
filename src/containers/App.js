import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Students from '../components/Students';

const mapStateToProps = ({ students, updateStudent }) => ({
	students,
	updateStudent
})

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class App extends Component {
	render() {
		return (
			<Students {...this.props} />
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);