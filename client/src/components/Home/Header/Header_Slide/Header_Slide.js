import React from 'react'
import {Link} from 'react-router-dom'
import './Header_slide.css'
import {getOneMovie} from '../../../../actions/moviesActions'
import {connect} from 'react-redux'

 function HeaderSlide({id,name,Year, rating,genre,PictureLink}) {
  
  return (
    
    <div >
        < img alt="" src={PictureLink} style={{ height: '60rem' }} className='MoviePicture'/>
        <div className=" grow container legend align-center   ">
        <div className="row ">
        <div className="col-sm-4 "> 
        <Link to={`/api/v1/movies/${id}` } params={id} onClick={() =>getOneMovie(id)} style={{ textDecoration: 'none' }}>
        <h1 className="py-3 h3 text-capitalize text-white font-weight-bold">{name}</h1>
        <p className="lead text-white text-capitalize ">{Year} | {genre} | Rating {rating} </p>
        </Link>
     
       </div>
        <div className="col-sm-8"></div>
        </div>
        
        </div>
       
    </div>
    
  )
}

export default connect(null,{getOneMovie})(HeaderSlide)
