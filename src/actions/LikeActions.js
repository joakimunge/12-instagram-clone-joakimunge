import {
	CREATE_LIKE_REQUEST,
	CREATE_LIKE_SUCCESS,
	CREATE_LIKE_FAILURE,
	CREATE_LIKE_MODAL_REQUEST,
} from '../constants';

const likesUrl = `/likes/`;

export const requestLike = (like) => ({
	type: CREATE_LIKE_REQUEST,
	toggle: false,
	payload: like
});

export const requestLikeModal = (like) => ({
	type: CREATE_LIKE_MODAL_REQUEST,
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

	if (like.source === 'modal') {
		dispatch(requestLikeModal(like))
	} else {
		dispatch(requestLike(like));
	}

	const options = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('access_token') || null
		},
		body: JSON.stringify(like)
	}

	return fetch(process.env.REACT_APP_API + likesUrl, options)
		.then(res => res.json())
		.then(like => {
			dispatch(likeSuccess(like));
		})
		.catch(error => {
			dispatch(likeFailure())
		})
}
