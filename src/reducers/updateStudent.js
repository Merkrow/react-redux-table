export const updateStudent = ( state, action ) => {
	switch (action.type) {
		case 'SHOW_ADD_STUDENT':
			return true;
		case 'HIDE_ADD_STUDENT':
			return false;
		case 'TOGGLE_CHANGE':
			return action.id;
		default:
			return !!state;
	}
};