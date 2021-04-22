import * as types from '../constants/albums'

const initialState = {
  isFetching: false,
  albums: [],
  albumsCount: 0
}

const PostsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ALBUMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.ALBUMS_FAIL:
      return Object.assign({}, state, {
        isFetching: false
      })

    case types.ALBUMS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        albums: action.data,
        albumsCount: action.data.length
      })

    default:
      return state
  }
}

export default PostsReducer
