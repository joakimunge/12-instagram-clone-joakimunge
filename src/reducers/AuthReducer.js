import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE
} from '../constants';

const initialState = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('token') ? true : false
}

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOGIN_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				user: action.creds
			})

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true,
				user: action.creds,
				message: 'Authentication successful!'
			})

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: action.message
			})
		default:
			return state;
	}
}

export default authReducer;