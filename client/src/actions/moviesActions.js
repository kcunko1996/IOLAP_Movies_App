import axios from 'axios'
import {GET_ALL_MOVIES,GET_ONE_MOVIE} from './types'
import {GET_ERROR} from './types'

export const GetAllMovies = () => dispatch => {
      
       axios
      .get('/api/v1/movies')
      .then(res =>
        dispatch({
          type: GET_ALL_MOVIES,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err
        })
      )
  }

export const getOneMovie = (data) => dispatch => {
        
           axios
          .get(`/api/v1/movies/${data}`)
          .then(res =>
            dispatch({
              type: GET_ONE_MOVIE,
              payload: res.data
            })
               )
              .catch(err =>
                dispatch({
                  type: GET_ERROR,
                  payload: err
                })
      )
 }

export const deleteMovie = (data,history) => dispatch => {

       axios
      .delete(`/api/v1/movies/${data}`)
      .then(() => history.push('/api/v1/movies'))
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err
        })
      )
  }

export const UpdateMovie = (id,data,history) => dispatch => {

       axios
      .put(`/api/v1/movies/${id}`,data)
      .then(() => window.location.reload())
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err.response.data
        })
      )
  }

export const AddMovieAction = (data,history) => dispatch => {

      axios
      .post('/api/v1/movies',data)
      .then(() => {
        window.location.reload()
        
    })
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err.response.data
        })
      )
  }