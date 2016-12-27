import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const LoginForm = React.createClass({
	componentDidMount() {
		const email = window.localStorage['login_email'];
		const password = window.localStorage['login_pw'];
		if(email && this.validateEmail(email) && password) {
			this.props.actions.login();
		}
	},
	validateEmail(email) {
    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	},
	handleLogin(e) {
		e.preventDefault();
		const email = e.target.elements[0].value;
		const password = e.target.elements[1].value;
		if(this.validateEmail(email)) {
			window.localStorage.setItem('login_email', email);
			window.localStorage.setItem('login_pw', password);
		}
		this.props.actions.login();
	},
	handleLogout(e) {
		e.preventDefault();
		window.localStorage.clear();
		this.props.actions.logout();
	},
	render() {
		return ( <div>
				{ !this.props.userState && (<form className='login_form' onSubmit={ (e) => this.handleLogin(e) }>
					<input type='text' placeholder='email' />
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