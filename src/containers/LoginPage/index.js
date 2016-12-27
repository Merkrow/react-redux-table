import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/UserActions';
import Navigation from '../../components/navigation';
import LoginForm from '../../components/LoginForm';

const mapStateToProps = ({ userState }) => ({
	userState
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(userActions, dispatch)
})

export class LoginPage extends Component {
	render() {
		return (
			<div>
				<Navigation userState={this.props.userState}/>
				<LoginForm {...this.props}/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);