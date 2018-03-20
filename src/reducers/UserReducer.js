import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	CREATE_COMMENT_MODAL_REQUEST,
	CREATE_LIKE_MODAL_REQUEST
} from '../constants';

const initialState = {
	isAuthenticated: localStorage.getItem('token') ? true : false,
	isFetching: true
}

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_MODAL_REQUEST:

      if (state._id === action.payload.postId) {
        return { ...state,
          comments: [...state.comments, {
            body: action.payload.body,
            author: action.payload.username
          }]
        }
      }
      return state

    case CREATE_LIKE_MODAL_REQUEST:
      if (state._id === action.payload.postId) {
        const userHasLiked = state.likes.indexOf(action.payload.userId)
        if (userHasLiked === -1) {
          return { ...state,
            likes: [...state.likes, action.payload.userId],
            toggle: false
          }
        }

        return {
          ...state,
          likes: [
            ...state.likes.slice(0, userHasLiked),
            ...state.likes.slice(userHasLiked + 1)
          ],
          toggle: true
        }
      }

      return state

    default:
      return state
  }
}

export const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_USER_REQUEST:
			return Object.assign({}, state, {
				payload: action.payload,
				isFetching: true
			})

		case FETCH_USER_SUCCESS:
			return Object.assign({}, state, {
				user: action.payload,
				isFetching: false,
				message: 'Successfully fetched user!',
				success: true
			})

		case FETCH_USER_FAILURE:
			return Object.assign({}, state, {
				message: action.message,
				isFetching: false,
				success: false
			})

		case CREATE_COMMENT_MODAL_REQUEST:
      return { ...state,
        user: {
        	...state.user,
        	posts: state.user.posts.map(post => modalReducer(post, action))
        } 
      }

    case CREATE_LIKE_MODAL_REQUEST:
      return { ...state,
        user: {
        	...state.user,
        	posts: state.user.posts.map(post => modalReducer(post, action))
        } 
      }
			
		default:
			return state;
	}
}

export default userReducer;