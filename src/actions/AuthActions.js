import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE
} from '../constants';


// Login action functions
export const requestLogin = (creds) => {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	}
}

export const loginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		token: user.token
	}
}

export const loginFailure = (message) => {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export const loginUser = (creds) => dispatch => {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(creds)
	}

	dispatch(requestLogin(creds));

	return fetch('/auth/login', options)
		.then(res => res.json())
		.then(res => {
			if (!res.auth) {
				dispatch(loginFailure(res.message || 'Something went wrong'));
				return Promise.reject(res)
			}
			localStorage.setItem('id', res.user);
			localStorage.setItem('access_token', res.token);
			dispatch(loginSuccess(res))
		})
		.catch(err => console.log("Error: ", err));
}

//Logout action functions
export const requestLogout = () => {
	return {
		type: LOGOUT_REQUEST,
		isFetching: true,
		isAuthenticated: true
	}
}

export const logoutSuccess = () => {
	return {
		type: LOGOUT_SUCCESS,
		isFetching: false,
		isAuthenticated: false
	}
}

export const logoutFailure = () => {
	return {
		type: LOGOUT_FAILURE,
		isFetching: false,
		isAuthenticated: false
	}
}

export const logoutUser = () => dispatch => {
	dispatch(requestLogout());
	localStorage.removeItem('id')
	localStorage.removeItem('access_token')
	dispatch(logoutSuccess());
}


