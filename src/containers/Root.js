import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App } from '../components';
import reducers from '../reducers';


const middleware = [thunk];
const store = createStore(
	reducers, 
	applyMiddleware(...middleware)
); 


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

