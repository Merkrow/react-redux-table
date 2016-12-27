import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

const initialState = {
	students: { students: [] },
	updateStudent: false,
	userState: false
};

const store = createStore(rootReducer, initialState);


export default store;