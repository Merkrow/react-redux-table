import expect from 'expect';
import { students } from '../reducers/students';


const testAddStudent = () => {
	const stateBefore = { students: [] };
	const action = {
		type: 'ADD_STUDENT',
		payload: {
			name: 'Vasya',
			department: 'Math',
			status: 'red'
		}
	};

	const stateAfter = {
		students: [
			{
				name: 'Vasya',
				department: 'Math',
				status: 'red',
				id: 1
			}
		]
	}

	expect(students(stateBefore, action)).toEqual(stateAfter);
}

const testChangeStudent = () => {
	const stateBefore = {
		students: [
			{
				name: 'Vasya',
				department: 'Math',
				status: 'red',
				id: 1
			},
			{
				name: 'Misha',
				department: 'Phys',
				status: 'yellow',
				id: 2
			}
		]
	};

	const action = {
		type: 'CHANGE',
		payload: {
			id: 2,
			name: 'Vova',
			department: 'Math',
			status: 'green'
		}
	}

	const stateAfter = {
		students: [
			{
				name: 'Vasya',
				department: 'Math',
				status: 'red',
				id: 1
			},
			{
				id: 2,
				name: 'Vova',
				department: 'Math',
				status: 'green'
			}
		]
	}

	expect(students(stateBefore, action)).toEqual(stateAfter);
}

const testDelete = () => {
	const stateBefore = {
		students: [
			{
				name: 'Vasya',
				department: 'Math',
				status: 'red',
				id: 1
			},
			{
				name: 'Misha',
				department: 'Phys',
				status: 'yellow',
				id: 2
			}
		]
	};

	const action = {
		type: 'DELETE',
		id: 1
	}

	const stateAfter = {
		students: [
			{
				name: 'Misha',
				department: 'Phys',
				status: 'yellow',
				id: 1
			}
		]
	}

	expect(students(stateBefore, action)).toEqual(stateAfter);
}

const run = () => {
	testAddStudent();
	testChangeStudent();
	testDelete();
}


export default run;