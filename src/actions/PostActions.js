import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_FAILURE,
	CREATE_POST_REQUEST,
	CREATE_POST_SUCCESS,
	CREATE_POST_FAILURE,

} from '../constants';

import {
	getToken
} from '../middleware/GetToken'

//All posts
export const requestPosts = () => ({
	type: FETCH_POSTS_START
});

export const receivePosts = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts
});

export const rejectedPosts = (message) => ({
	type: FETCH_POSTS_FAILURE,
	message: message
});

export const fetchPosts = () => dispatch => {
	dispatch(requestPosts());

	const token = getToken()

	if (!token) {
		return dispatch(rejectedPosts('Could not load token'))
	}

	const options = {
		method: 'GET',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	}

	return fetch('/posts/all', options)
		.then(res => res.json())
		.then(data => {
			dispatch(receivePosts(data));
		})
		.catch(error => {
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
			dispatch(receivePostInfo(data))
		})
		.catch(error => {
			dispatch(rejectedPostInfo());
		})
}


//Create post
export const requestCreatePost = (formData) => ({
	type: CREATE_POST_REQUEST,
	payload: formData
});

export const receiveCreatePost = (post) => ({
	type: CREATE_POST_SUCCESS,
	payload: post
});

export const rejectedCreatePost = (message) => ({
	type: CREATE_POST_FAILURE,
	message: message
});

export const createPost = (formData) => dispatch => {
	const token = getToken();

	if (!token) {
		return dispatch(rejectedCreatePost('Could not load token'))
	}

	dispatch(requestCreatePost(formData));
	const headers = new Headers();
	headers.append('x-access-token', token);

	const options = {
		method: 'POST',
		headers,
		body: formData
	};

	const request = new Request('/posts', options);

	return fetch(request)
		.then(res => res.json())
		.then(post => {
			dispatch(receiveCreatePost(post))
		})
		.catch(error => {
			dispatch(rejectedCreatePost(error));
		})
}
