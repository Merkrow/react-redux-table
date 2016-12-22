import { createStore, combineReducers } from 'redux';
import { students } from '../reducers/students';
import { updateStudent } from '../reducers/updateStudent';

const initialState = {
	students: { students: [] },
	updateStudent: false
};

const store = createStore(combineReducers({ students, updateStudent }), initialState);


export default store;