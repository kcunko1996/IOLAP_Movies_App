import React from 'react'
import './NoMovieError.css'
import AddMovie from '../AddMovie/AddMovie'
export default function NoMovieError() {
  return (
    <div className="Error container text-center ">
      <h1 className="display-3 text-white">There are no movies in database.</h1>
      <AddMovie/>
    </div>
  )
}
