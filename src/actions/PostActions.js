import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_FAILURE
} from '../constants';

//All posts
export const requestPosts = () => ({
	type: FETCH_POSTS_START
});

export const receivePosts = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts
});

export const rejectedPosts = () => ({
	type: FETCH_POSTS_FAILURE
});

export const fetchPosts = () => dispatch => {
	dispatch(requestPosts());
	return fetch('/posts/all')
		.then(res => res.json())
		.then(data => {
			console.log('Successfully got data: ', data);
			dispatch(receivePosts(data));
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(rejectedPosts())
		})
}

// Single post
export const requestPostInfo = () => ({
	type: FETCH_POST_START
});

export const receivePostInfo = (post) => ({
	type: FETCH_POST_SUCCESS,
	payload: post
});

export const rejectedPostInfo = () => ({
	type: FETCH_POST_FAILURE
});

export const fetchPostInfo = (id) => dispatch => {
	dispatch(requestPostInfo());
	return fetch('/posts/' + id)
		.then(res => res.json())
		.then(data => {
			console.log('Got post info: ', data);
			dispatch(receivePostInfo(data))
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(rejectedPostInfo());
		})
}
