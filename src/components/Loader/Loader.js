import React from 'react';
import logo from '../../aperture.svg';
import './Loader.css';

const Loader = () => {
	return (
		<span className="App-Loader__container">
			<img src={logo} className="App-Loader" alt="logo" width="48px"/>
		</span>
	)
}

export default Loader;