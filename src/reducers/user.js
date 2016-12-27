export const userState = ( state, action ) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return true;
		case 'LOGOUT_SUCCESS':
			return false;
		default:
			return state || false;
	}
}