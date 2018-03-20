import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	TOKEN_REQUEST,
	TOKEN_SUCCESS,
	TOKEN_FAILURE,
	TOKEN_GET
} from '../constants';

const initialState = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('access_token') ? true : false
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
				user: action.user,
				message: 'Authentication successful!'
			})

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: action.message
			})

		case SIGNUP_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				user: action.creds
			})

		case SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true,
				user: action.user,
				message: 'Authentication successful!'
			})

		case SIGNUP_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: action.message
			})

		case LOGOUT_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false
			})

		case LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: 'Logout successful!'
			})

		case LOGOUT_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: action.message
			})

		case TOKEN_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				token: action.token
			})

		case TOKEN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true,
				user: action.user,
				message: 'Authentication successful!'
			})

		case TOKEN_FAILURE:
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