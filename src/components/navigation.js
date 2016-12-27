import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Navigation = React.createClass({
	render() {
		return (
			<div>
				{ this.props.userState && <button><Link to='/students'>Table</Link></button> }
				<button><Link to='/login'>Login</Link></button>
			</div>
		)
	}
})

export default Navigation;