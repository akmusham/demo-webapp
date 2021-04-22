import * as types from '../constants/users'

const initialState = {
  isFetching: false,
  users: [],
  usersCount: 0
}

const UsersReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.USERS_FAIL:
      return Object.assign({}, state, {
        isFetching: false
      })

    case types.USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.data,
        usersCount: action.data.length
      })

    default:
      return state
  }
}

export default UsersReducer
