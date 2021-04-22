import * as types from '../constants/todos'

const initialState = {
  isFetching: false,
  todos: [],
  todosCount: 0
}

const TodosReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.TODOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.TODOS_FAIL:
      return Object.assign({}, state, {
        isFetching: false
      })

    case types.TODOS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.data,
        todosCount: action.data.length
      })

    default:
      return state
  }
}

export default TodosReducer
