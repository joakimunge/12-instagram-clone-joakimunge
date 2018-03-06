import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE
} from '../constants';

const initialState = {
	photos: [],
	isFetching: false

}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PHOTOS_START:
			return {
				...state,
				isFetching: true
			}
		case FETCH_PHOTOS_SUCCESS:
			return {
				...state, photos: action.payload,
				isFetching: false
			}
		case FETCH_PHOTOS_FAILURE:
			return {
				...state,
				isFetching: false
			}
		default:
			return state;
	}
}

export default rootReducer;