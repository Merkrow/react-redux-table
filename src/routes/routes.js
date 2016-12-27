import { IndexRedirect, Route } from 'react-router';
import LoginPage from '../containers/LoginPage/index';
import App from '../containers/App';
import Navigation from '../components/navigation';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const routes = (
	<Route path='/'>
		<IndexRedirect to='login'/>
		<Route path='/login' component={ LoginPage }>
		</Route>
		<Route path='/students' component= { App }>
		</Route>
		<Route path='*' component = { Navigation }>
		</Route>
	</Route>
);

export default routes;