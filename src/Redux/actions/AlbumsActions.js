import axios from 'axios'
import * as types from '../constants/albums'

export const albumSuccess = (payload) => ({
  type: types.ALBUMS_SUCCESS,
  data: payload
})

export const albumFail = () => ({
  type: types.ALBUMS_FAIL
})

export const albumRequest = () => ({
  type: types.ALBUMS_REQUEST
})

export const getAlbums = () => {
  return async dispatch => {
    try {
      dispatch(albumRequest())
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums`,{headers: {"Access-Control-Allow-Origin": "*"}})
      dispatch(albumSuccess(data))

    } catch (e) {
      dispatch(albumFail())
    }
  }
}
