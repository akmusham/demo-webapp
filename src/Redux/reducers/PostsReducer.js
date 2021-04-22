import * as types from '../constants/posts'

const initialState = {
  isFetching: false,
  posts: [],
  noOfPosts: 0
}

const PostsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.POSTS_FAIL:
      return Object.assign({}, state, {
        isFetching: false
      })

    case types.POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.data,
        noOfPosts: action.data.length
      })

    default:
      return state
  }
}

export default PostsReducer
