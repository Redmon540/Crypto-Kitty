import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchKitties = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
}

const initialStateUsers = {
	isPending: false,
	users: [],
	error: ''
}

export const requestUsers = (state=initialStateUsers, action={}) => {
	switch(action.type) {
		case REQUEST_USERS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_USERS_SUCCESS:
			return Object.assign({}, state, { users: action.payload, isPending: false })
		case REQUEST_USERS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}