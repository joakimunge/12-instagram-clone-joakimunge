import {
	CREATE_COMMENT_REQUEST,
	CREATE_COMMENT_SUCCESS,
	CREATE_COMMENT_FAILURE
} from '../constants';

const initialState = {
	isAuthenticated: localStorage.getItem('token') ? true : false
}

export const commentReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_COMMENT_REQUEST:
			return Object.assign({}, state, {
				payload: action.payload
			})

		case CREATE_COMMENT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true,
				user: action.creds,
				message: 'Authentication successful!'
			})

		case CREATE_COMMENT_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				message: action.message
			})
			
		default:
			return state;
	}
}

export default commentReducer;