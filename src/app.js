import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';	
import store from './store/store';
import App from './containers/App';
import LoginPage from './containers/LoginPage/index';
import Navigation from './components/navigation';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';


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

function run() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				{routes}
			</Router>
		</Provider>,
		document.getElementById('root')
	)
}


run();
