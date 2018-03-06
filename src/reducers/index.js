import { combineReducers } from 'redux';
import { rootReducer } from './RootReducer';
import { authReducer } from './AuthReducer.js';

export const reducers = combineReducers({
	auth: authReducer,
	root: rootReducer
})

export default reducers;