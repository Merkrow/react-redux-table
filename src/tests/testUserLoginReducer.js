import expect from 'expect';
import { userState } from '../reducers/user';

const testLogin = () => {
	const stateBefore = false;

	const action = {
		type: 'LOGIN_SUCCESS'
	}

	const stateAfter = true;

	expect(userState(stateBefore, action)).toEqual(stateAfter);

}

const testLogout = () => {
	const stateBefore = true;

	const action = {
		type: 'LOGOUT_SUCCESS'
	}

	const stateAfter = false;

	expect(userState(stateBefore, action)).toEqual(stateAfter);

}

const run = () => {
	testLogin();
	testLogout();
}

export default run;