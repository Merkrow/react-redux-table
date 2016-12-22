let counter = 0;
const student = ( state, action ) => {
	switch (action.type) {
		case 'ADD_STUDENT':
			counter++;
			return {
				id: counter,
				...action.payload
			}
		case 'CHANGE':
			if(state.id !== action.payload.id) {
				return state;
			}
			return {
				...action.payload
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