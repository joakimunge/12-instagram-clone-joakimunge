import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE
} from '../constants';

const initialState = {
	posts: [],
	isFetching: false

}

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_START:
			return {
				...state,
				isFetching: true
			}
		case FETCH_POSTS_SUCCESS:
			return {
				...state, posts: action.payload,
				isFetching: false
			}
		case FETCH_POSTS_FAILURE:
			return {
				...state,
				isFetching: false
			}
		default:
			return state;
	}
}

export default postsReducer;