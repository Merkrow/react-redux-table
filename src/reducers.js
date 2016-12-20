//reducers

const student = ( state, action ) => {
	switch (action.type) {
		case 'ADD_STUDENT':
			return {
				id: action.payload.id,
				name: action.payload.name,
				department: action.payload.department,
				status: action.payload.status,
				change: false
			}
		case 'TOGGLE_CHANGE':
			if(state.id !== action.id) {
				return state;
			}
			return {
				id: state.id,
				name: state.name,
				department: state.department,
				status: state.status,
				change: !state.change
			}
		case 'CHANGE':
			if(state.id !== action.payload.id) {
				return state;
			}
			return {
				id: action.payload.id,
				name: action.payload.name,
				department: action.payload.department,
				status: action.payload.status,
				change: !state.change
			}
		case 'DELETE':
			if(state.id !== action.id) {
				return true;
			}
			return false;
		default:
			return state;
	}
}

export const students = ( state, action ) => {
	switch (action.type) { 
		case 'ADD_STUDENT':
			return [
				...state,
				student(undefined, action)
			];
		case 'TOGGLE_CHANGE':
			return state.map(t => student(t, action));
		case 'CHANGE':
			return state.map(t => student(t, action));
		case 'DELETE':
			return state.filter(t => student(t, action));
		default:
			return state || [];
	}
}

export const addingStudent = ( state, action ) => {
	switch (action.type) {
		case 'SHOW_ADD_STUDENT':
			return true;
		case 'HIDE_ADD_STUDENT':
			return false;
		default:
			return !!state;
	}
};