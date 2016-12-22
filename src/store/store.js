import { createStore, combineReducers } from 'redux';
import { students } from '../reducers/students';
import { addingStudent } from '../reducers/addingStudent';

const initialState = {
	students: { students: [] },
	addingStudent: false
};

const store = createStore(combineReducers({ students, addingStudent }), initialState);


export default store;