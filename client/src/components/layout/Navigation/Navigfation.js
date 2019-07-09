import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return( <nav className="navbar navbar-expand-md navbar-dark bg-dark  mb-3 py-3 fixed-top">
  <div className="container">
    
    <Link to='/'><h1 className="h2 navbar-brand text-light  " to="" >DBP Movies</h1> </Link>
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mobile-nav">
     

      <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
          <Link className="nav-link text-light" to="/api/v1/movies"> Home </Link>
      </li>

        <li className="nav-item">
          <Link className="nav-link text-light" to="/api/v1/movies" data-toggle="modal" data-target="#AddModal"> Add Movie </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>)
}

export default Navigation
