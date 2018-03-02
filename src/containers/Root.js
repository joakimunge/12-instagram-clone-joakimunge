import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App, ErrorMessage, PhotoModal } from '../components';
import { Home, SignIn, SignUp, Profile } from '../views';
import rootReducer from '../reducers';


const middleware = [thunk]; //Define middleware for redux store
const store = createStore(
	rootReducer, 
	applyMiddleware(...middleware)
); //Apply middleware to store


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

