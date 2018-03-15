import {
	CREATE_COMMENT_REQUEST,
	CREATE_COMMENT_SUCCESS,
	CREATE_COMMENT_FAILURE
} from '../constants';

const commentsUrl = `/comments/`;

export const requestComment = (comment) => ({
	type: CREATE_COMMENT_REQUEST,
	payload: comment
});

export const commentSuccess = (comment) => ({
	type: CREATE_COMMENT_SUCCESS,
	payload: comment
});

export const commentFailure = (comment) => ({
	type: CREATE_COMMENT_FAILURE,
	payload: comment
});

export const createComment = (comment) => dispatch => {
	dispatch(requestComment());

	const options = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('access_token') || null
		},
		body: JSON.stringify(comment)
	}

	return fetch(commentsUrl, options)
		.then(res => res.json())
		.then(comment => {
			console.log('Successfully posted comment: ', comment);
			dispatch(commentSuccess(comment));
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(commentFailure(comment))
		})
}
