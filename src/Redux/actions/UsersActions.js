import axios from 'axios'
import * as types from '../constants/users'

export const userSuccess = (payload) => ({
  type: types.USERS_SUCCESS,
  data: payload
})

export const userFail = () => ({
  type: types.USERS_FAIL
})

export const userRequest = () => ({
  type: types.USERS_REQUEST
})

export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch(userRequest())
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      dispatch(userSuccess(data))

    } catch (e) {
      dispatch(userFail())
    }
  }
}
