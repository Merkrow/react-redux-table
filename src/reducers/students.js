import student from './student';


export const students = ( state, action ) => {
	switch (action.type) { 
		case 'ADD_STUDENT':
			return {
				...state,
				students: [...state.students, student(undefined, action)]
			};
		case 'CHANGE':
			return {
				...state,
				students: state.students.map(t => student(t, action))
			};
		case 'DELETE':
			return {
				...state,
				students: state.students.filter(t => student(t, action)).map(t => {
					if(t.id > action.id) {
						return {
							...t,
							id: t.id-1
						}
					}
					return t;
				})
			}
		default:
			return state || { students: [] };
	}
}