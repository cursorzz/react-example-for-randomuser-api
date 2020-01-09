import axios from 'axios'
export const FETCH_USERS_LOADING = "FETCH_USERS_LOADING"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

export const fetchUsers = (page, itemsPerPage) => dispatch => {
  console.log(page, itemsPerPage)
  dispatch({ type: FETCH_USERS_LOADING })
  return axios.get(`https://randomuser.me/api/`, { params: { page: page, results: itemsPerPage } })
    .then(res => res['data'])
    .then((response) => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response['results'], page: page })
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_ERROR, error: error })
    })
}
