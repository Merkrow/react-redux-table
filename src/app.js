import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';	
import { students } from './reducers/students';
import { addingStudent } from './reducers/addingStudent';
import App from './containers/App';




const initialState = {
	students: [],
	addingStudent: false
};
const store = createStore(combineReducers({ students, addingStudent }), initialState);


function run() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}


run();
