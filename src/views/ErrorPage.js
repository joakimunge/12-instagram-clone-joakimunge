import React from 'react';

import { Link } from 'react-router-dom';
import { ErrorMessage } from '../components';


const ErrorPage = () => {
	return (
		<div className="App-ErrorPage__container">
			<ErrorMessage message="ERRRRROR" />
		</div>
	)
}

export default ErrorPage;