let counter = 0;
const student = ( state, action ) => {
	switch (action.type) {
		case 'ADD_STUDENT':
			counter++;
			return {
				id: counter,
				...action.payload,
				change: false
			}
		case 'TOGGLE_CHANGE':
			if(state.id !== action.id) {
				return state;
			}
			return {
				...state,
				change: !state.change
			}
		case 'CHANGE':
			if(state.id !== action.payload.id) {
				return state;
			}
			return {
				...action.payload,
				change: !state.change
			}
		case 'DELETE':
			if(state.id !== action.id) {
				return true;
			}
			counter--;
			return false;
		default:
			return state;
	}
}

export default student;