import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { App } from '../components';
import reducers from '../reducers';
import {
	verifyToken,
	tokenFailure
} from '../actions';


const middleware = [thunk];
const store = createStore(
	reducers, 
	applyMiddleware(...middleware)
); 

const user = localStorage.getItem('id') || null;
const token = localStorage.getItem('access_token') || null;

if (user && token) {
	store.dispatch(verifyToken(token));
} else {
	store.dispatch(tokenFailure('You are not authenticated'));
}


const Root = () => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</Provider>
	)
};

export default Root;

