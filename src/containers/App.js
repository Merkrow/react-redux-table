import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Students from '../components/Students';
import Navigation from '../components/navigation';

const mapStateToProps = ({ students, updateStudent, userState }) => ({
	students,
	updateStudent,
	userState
})

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class App extends Component {
	render() {
		return (<div>
			<Navigation />
			<Students {...this.props} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);