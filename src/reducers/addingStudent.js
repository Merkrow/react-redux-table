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