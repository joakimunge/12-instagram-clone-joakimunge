import {
	CREATE_COMMENT_REQUEST,
	CREATE_COMMENT_SUCCESS,
	CREATE_COMMENT_FAILURE,
	CREATE_COMMENT_MODAL_REQUEST
} from '../constants';

const commentsUrl = `/comments/`;

export const requestComment = (comment) => ({
	type: CREATE_COMMENT_REQUEST,
	payload: comment
});

export const requestCommentModal = (comment) => ({
	type: CREATE_COMMENT_MODAL_REQUEST,
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

	if (comment.source === 'modal') {
		dispatch(requestCommentModal(comment))
	} else {
		dispatch(requestComment(comment));
	}

	const options = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('access_token') || null
		},
		body: JSON.stringify(comment)
	}

	return fetch(process.env.REACT_APP_API + commentsUrl, options)
		.then(res => res.json())
		.then(comment => {
			dispatch(commentSuccess(comment));
		})
		.catch(error => {
			dispatch(commentFailure(comment))
		})
}
