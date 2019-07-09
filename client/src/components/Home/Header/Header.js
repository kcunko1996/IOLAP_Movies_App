import React from 'react'
import './Header.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header_SLide from '../Header/Header_Slide/Header_Slide'
import Loading from '../../common/Loading'

export default function Header({movies}) {
  
const isArray = Array.isArray(movies);

    if(!isArray){
      return (<Loading/> )

    } else{

      let ArraySlide = movies.slice(0,4).map(movie => {
        return <Header_SLide 
        key={movie.id} 
        id={movie.id} 
        name={movie.name} 
        rating={movie.rating}
        genre={movie.genre} 
        PictureLink={movie.PictureLink} />
        })

      return (
        <Carousel 
        infiniteLoop={true}
        autoPlay={true} 
        interval={3000}
        transitionTime={500} 
        showThumbs={false} 
        showStatus={false}>

          {ArraySlide}

        </Carousel>
      )
    }
  
}
