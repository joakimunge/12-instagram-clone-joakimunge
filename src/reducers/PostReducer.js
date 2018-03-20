import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  CREATE_LIKE_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  success: false
}

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:

      if (state._id === action.payload.postId) {
        return { ...state,
          comments: [...state.comments, {
            body: action.payload.body,
            author: action.payload.username
          }]
        }
      }
      return state

    case CREATE_LIKE_REQUEST:
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


export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetching: false
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case CREATE_POST_REQUEST:
      return {
        ...state,
        isSubmitting: true
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        success: true
      }
    case CREATE_POST_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        success: false
      }
    case CREATE_COMMENT_REQUEST:
      return { ...state,
        posts: state.posts.map(post => postReducer(post, action))
      }

    case CREATE_LIKE_REQUEST:
      return { ...state,
        posts: state.posts.map(post => postReducer(post, action))
      }

    default:
      return state;
  }
}

export default postsReducer;