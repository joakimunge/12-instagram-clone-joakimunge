import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE
} from '../constants';

const initialState = {
	isAuthenticated: localStorage.getItem('token') ? true : false
}

export const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_USER_REQUEST:
			return Object.assign({}, state, {
				payload: action.payload,
				isFetching: true
			})

		case FETCH_USER_SUCCESS:
			return Object.assign({}, state, {
				user: action.payload,
				isFetching: false,
				message: 'Successfully fetched user!'
			})

		case FETCH_USER_FAILURE:
			return Object.assign({}, state, {
				message: action.message,
				isFetching: false
			})
			
		default:
			return state;
	}
}

export default userReducer;