import { combineReducers } from 'redux';
import { rootReducer } from './RootReducer';
import { authReducer } from './AuthReducer';
import { commentReducer } from './CommentReducer';
import { likeReducer } from './LikeReducer';


export const reducers = combineReducers({
	auth: authReducer,
	root: rootReducer,
	like: likeReducer,
	comment: commentReducer
})

export default reducers;