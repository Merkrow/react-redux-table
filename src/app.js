import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';	
import * as reducers from './reducers';
import App from './components/App';





const store = createStore(combineReducers(reducers));


function run() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}


run();
