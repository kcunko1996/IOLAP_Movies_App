import React from 'react'
import {Link} from 'react-router-dom'
import './MovieItem.css'
export default function MovieItem({id,name,PictureLink}) {
  return (

   <div className="movie-picture col-md-4 m-auto py-4 grow  d-flex">

   <Link className="nav-link text-light thumbnail" to={`/api/v1/movies/${id}`}> 

   <img src={PictureLink} className="picture clickable  border rounded" alt="" />

    <div className="mask flex-center h1 text-white">
          <p className="white-text ">{name}</p>
    </div>
    
   </Link>

   </div>

  )
}
