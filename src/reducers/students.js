import student from './student';


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
			return state.filter(t => student(t, action)).map(t => {
				if(t.id > action.id) {
					return {
						...t,
						id: t.id-1
					}
				}
				return t;
			});
		default:
			return state || [];
	}
}