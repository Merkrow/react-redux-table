import expect from 'expect';
import { updateStudent } from '../reducers/updateStudent';

const testShow = () => {
	const stateBefore = false;

	const action = {
		type: 'SHOW_ADD_STUDENT'
	}

	const stateAfter = true;

	expect(updateStudent(stateBefore, action)).toEqual(stateAfter);
}

const testHide = () => {
	const stateBefore = true;

	const action = {
		type: 'HIDE_ADD_STUDENT'
	}

	const stateAfter = false;

	expect(updateStudent(stateBefore, action)).toEqual(stateAfter);
}

const testToggle = () => {
	const stateBefore = false;

	const action = {
		type: 'TOGGLE_CHANGE',
		id: 2
	}

	const stateAfter = 2;

	expect(updateStudent(stateBefore, action)).toEqual(stateAfter);
}

const run = () => {
	testShow();
	testHide();
	testToggle();
}

export default run;