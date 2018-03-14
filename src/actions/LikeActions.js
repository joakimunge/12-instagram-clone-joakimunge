import {
	CREATE_LIKE_REQUEST,
	CREATE_LIKE_SUCCESS,
	CREATE_LIKE_FAILURE,
	REMOVE_LIKE_REQUEST,
	REMOVE_LIKE_SUCCESS,
	REMOVE_LIKE_FAILURE
} from '../constants';

const likesUrl = `/likes/`;

export const requestLike = (like) => ({
	type: CREATE_LIKE_REQUEST,
	toggle: false,
	payload: like
});

export const likeSuccess = (like) => ({
	type: CREATE_LIKE_SUCCESS,
	toggle: true,
	payload: like
});

export const likeFailure = () => ({
	type: CREATE_LIKE_FAILURE,
	toggle: false
});

export const createLike = (like) => dispatch => {
	dispatch(requestLike(like));

	const options = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('access_token') || null
		},
		body: JSON.stringify(like)
	}

	return fetch(likesUrl, options)
		.then(res => res.json())
		.then(like => {
			console.log('Success: ', like);
			dispatch(likeSuccess(like));
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(likeFailure())
		})
}
