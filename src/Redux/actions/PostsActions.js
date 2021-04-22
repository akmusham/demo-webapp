import axios from 'axios'
import * as types from '../constants/posts'

export const postSuccess = (payload) => ({
  type: types.POSTS_SUCCESS,
  data: payload
})

export const postFail = () => ({
  type: types.POSTS_FAIL
})

export const postRequest = () => ({
  type: types.POSTS_REQUEST
})

export const getPosts = () => {
  return async dispatch => {
    try {
      dispatch(postRequest())
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      dispatch(postSuccess(data))

    } catch (e) {
      dispatch(postFail())
    }
  }
}
