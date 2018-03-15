import { combineReducers } from 'redux';
import { postsReducer } from './PostReducer';
import { authReducer } from './AuthReducer';
import { commentReducer } from './CommentReducer';
import { likeReducer } from './LikeReducer';


export const reducers = combineReducers({
	auth: authReducer,
	posts: postsReducer,
	like: likeReducer,
	comment: commentReducer
})

export default reducers;