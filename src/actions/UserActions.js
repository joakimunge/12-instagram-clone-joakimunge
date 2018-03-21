import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE
} from '../constants';

const usersUrl = `/api/users/`;

export const requestUser = (user) => ({
	type: FETCH_USER_REQUEST,
	payload: user
});

export const userSuccess = (user) => ({
	type: FETCH_USER_SUCCESS,
	payload: user
});

export const userFailure = (user) => ({
	type: FETCH_USER_FAILURE,
	payload: user
});

export const fetchUser = (user) => dispatch => {
	dispatch(requestUser());

	const options = {
		method: 'GET',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': localStorage.getItem('access_token') || null
		}
	}

	return fetch(usersUrl + user, options)
		.then(res => res.json())
		.then(data => {
			dispatch(userSuccess(data));
		})
		.catch(error => {
			dispatch(userFailure(user))
		})
}
