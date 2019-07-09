import {GET_ALL_MOVIES,GET_ONE_MOVIE,FETCH_DATA} from '../actions/types'


const initialState = { 

}

export default function(state = initialState, action) {
  switch(action.type) {
  case GET_ALL_MOVIES:
  return{
    movies: action.payload
  }
  case GET_ONE_MOVIE:
  return{
    movies: action.payload
  }
  case FETCH_DATA:
            return {
            successful: true
        };
    default:
      return state
  }
}