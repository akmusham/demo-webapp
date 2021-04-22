import axios from 'axios'
import * as types from '../constants/todos'

export const todosSuccess = (payload) => ({
  type: types.TODOS_SUCCESS,
  data: payload
})

export const todos = () => ({
  type: types.TODOS_FAIL
})

export const todosRequest = () => ({
  type: types.TODOS_REQUEST
})

export const getTodos = () => {
  return async dispatch => {
    try {
      dispatch(todosRequest())
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
      dispatch(todosSuccess(data))

    } catch (e) {
      dispatch(todos())
    }
  }
}
