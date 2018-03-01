import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorMessage } from '../components';
import { Home, SignIn, SignUp, Profile } from '../views';


const Root = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/profile" component={Profile} />
				<Route path="*" component={ErrorMessage} />
			</Switch>
		</main>
	)
};

export default Root;

