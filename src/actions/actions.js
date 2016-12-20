//actions

export const showAddStudent = () => ({ type: 'SHOW_ADD_STUDENT' });
export const hideAddStudent = () => ({ type: 'HIDE_ADD_STUDENT' });
export const addStudent = (name, department, status) => ({
	type: 'ADD_STUDENT',
	payload: {
		name,
		department,
		status
	}
})

export const changeStudent = (id, name, department, status) => ({
	type: 'CHANGE',
	payload: {
		id,
		name,
		department,
		status
	}
})

export const remove = (id) => ({
	type: 'DELETE',
	id
})

export const toggleChange = (id) => ({
	type: 'TOGGLE_CHANGE',
	id
})