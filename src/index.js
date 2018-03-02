import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { App } from './components/';
import { Root } from './containers/';

render(
	<Root />, 
	document.getElementById('root')
);
