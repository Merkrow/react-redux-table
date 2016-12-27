import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import util from '../util/util';

const LoginForm = React.createClass({
	getInitialState() {
		return {
			notValidEmail: false
		}
	},
	componentDidMount() {
		const email = util.getEmail();
		const password = util.getPassword();
		if(email && util.validateEmail(email) && password) {
			this.props.actions.login();
		}
	},
	handleLogin(e) {
		e.preventDefault();
		const email = e.target.elements[0].value;
		const password = e.target.elements[1].value;
		if(util.validateEmail(email) && password) {
			util.setEmail(email);
			util.setPassword(password);
			browserHistory.push('/students');
			this.props.actions.login();
		}
		this.setState({
			notValid: true
		})
	},
	handleLogout(e) {
		e.preventDefault();
		util.clearStorage();
		this.props.actions.logout();
	},
	render() {
		return ( <div>
				{ !this.props.userState && (<form className='login_form' onSubmit={ (e) => this.handleLogin(e) }>
					<input type='text' className={this.state.notValid ? 'error' : ''} placeholder='email' />
					<input type='password' placeholder='password' />
					<button type='submit'>Login</button>
				</form>) }
				{ this.props.userState &&
					<div>
						<span>{ window.localStorage['login_email'] }</span>
						<button onClick={ e => this.handleLogout(e) }>Logout</button>
					</div>
				}
			</div>
		)
	}
})

export default LoginForm;