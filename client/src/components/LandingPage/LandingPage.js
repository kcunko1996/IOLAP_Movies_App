import React from 'react'
import './LandingPage.css'
import AddMovie from '../Home/AddMovie/AddMovie'
export default function LandingPage() {
  return (
    <div className=" ">
    <div className="bg-landing">
     <img src="http://www.filmtrend.net/wp-content/uploads/2018/06/how-to-find-movies.jpg" alt="BackgroundLink" className='Image-bg ' />
   </div>
    <div className="  landing-header ">
    <h1 className="display-2 text-white ">DBP MOVIES</h1>
    </div>
    <AddMovie/>
    </div>
  )
}
