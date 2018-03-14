import {
	CREATE_LIKE_REQUEST,
	CREATE_LIKE_SUCCESS,
	CREATE_LIKE_FAILURE,
	REMOVE_LIKE_REQUEST,
	REMOVE_LIKE_SUCCESS,
	REMOVE_LIKE_FAILURE
} from '../constants';

const initialState = {
	isAuthenticated: localStorage.getItem('token') ? true : false
}

export const likeReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_LIKE_REQUEST:
			return Object.assign({}, state, {
				payload: action.payload
			})

		case CREATE_LIKE_SUCCESS:
			return Object.assign({}, state, {
				like: action.like,
				message: 'Successfully liked post!'
			})

		case CREATE_LIKE_FAILURE:
			return Object.assign({}, state, {
				message: action.message
			})
			
		default:
			return state;
	}
}

export default likeReducer;