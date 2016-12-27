import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';	
import store from './store/store';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import test from './tests/test';

test();

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
