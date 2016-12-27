import { combineReducers } from 'redux';
import { students } from './students';
import { updateStudent } from './updateStudent';
import { userState } from './user';

export const rootReducer = combineReducers({
	userState,
	students,
	updateStudent
})