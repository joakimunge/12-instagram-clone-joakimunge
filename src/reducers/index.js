import { combineReducers } from 'redux';
import { postsReducer } from './PostReducer';
import { authReducer } from './AuthReducer';
import { userReducer } from './UserReducer';


export const reducers = combineReducers({
	auth: authReducer,
	posts: postsReducer,
	user: userReducer
})

export default reducers;