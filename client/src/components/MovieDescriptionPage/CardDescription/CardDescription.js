import React from 'react'
import './CardDescription.css'
import Button from '../Buttons/Button'
export default function CardDescription({id,name,genre,rating,Year,Desc,Language,PictureLink,Time}) {

  return (

    //Card design
<div className="container shadow p-3 mb-5  rounded MovieDescription  ">
  <div className="row ">

        {/* Card Picture */}
        <div className="col-sm">
            <div className="">
            <img src={PictureLink} alt="" className="MovieDescriptionImage img-rounded pl-4" />
            </div>
        </div>
        
        {/* Card Description */}
      <div className="col-sm container">

        <h1 className="h1  text-center text-white ">{name}</h1> 

        <div className="d-flex flex-row container mb-5 mr-auto text-center genreC ">
        <hr className="mb-1"></hr>
        <p className="py-2 text-white genre">{genre}</p>
        </div>

        <div className="description d-flex flex-column   container">

            <p className="nameDesc text-white mr-auto"><span className="name  ">Movie:</span> {name}</p>
            <p className="nameDesc text-white mr-auto"><span className="name  ">Genre:</span> {genre}</p>
            <p className="nameDesc text-white mr-auto"><span className="name ">Year:</span> {Year}</p>
            <p className="nameDesc text-white mr-auto"><span className="name ">Rating:</span> {rating}</p>
            <p className="nameDesc text-white mr-auto"><span className="name ">Time:</span> {Time} min</p>
            <p className="nameDesc text-white mr-auto"><span className="name ">Language:</span> {Language}</p>
            <p className="nameDesc text-white mr-auto"><span className="name ">Description:</span> {Desc}</p>

              
            <Button/>
           
        </div>
    </div>
  </div>
  
</div>  
  )
}
