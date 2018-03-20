import {
	TOKEN_REQUEST,
	TOKEN_SUCCESS,
	TOKEN_FAILURE
} from '../constants';

export const requestToken = (token) => {
	return {
		type: TOKEN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		token: token
	}
}

export const tokenSuccess = (user) => {
	return {
		type: TOKEN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		user: user
	}
}

export const tokenFailure = (message) => {
	return {
		type: TOKEN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export const verifyToken = (token) => dispatch => {
	const options = {
		method: 'GET',
		headers: { 
			'Content-Type': 'application/json',
			'x-access-token': token
		}
	}

	dispatch(requestToken(token));

	return fetch(process.env.REACT_APP_API + '/auth/verify', options)
		.then(res => res.json())
		.then(res => {
			if (!res._id) {
				dispatch(tokenFailure('Could not verify token. Please sign in again.'));
				return Promise.reject(res)
			}
			dispatch(tokenSuccess(res))
		})
		.catch(err => console.log("Error: ", err));
}
