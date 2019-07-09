import React from 'react'
import './Movies_Grid.css'
import MovieItem from './Movie_Item/MovieItem'
import Loading from '../../common/Loading'

 class MoviesGrid extends React.Component  {

  constructor(){
    super()
    this.state = {
      limit: 3
    }
  }

  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 3
    })
  }

   render(){
 const movies = this.props.movies
const isArray = Array.isArray(movies);

    if(!isArray){
     return (<Loading/> )
    } else{

let MovieNumber = movies.length
let limit = this.state.limit


let ArrayGrid = movies.slice(0,limit).map(movie => {
    return <MovieItem key={movie.id} id={movie.id} name={movie.name}  PictureLink={movie.PictureLink} ></MovieItem>
})

return (
<section className="text-center my-5 ">

  <h2 className="display-4 font-weight-bold my-5  text-white">DBP MOVIES</h2>
  <p className="lead grey-text w-responsive mx-auto mb-5  text-white">Only movies site that you will need.</p>

    <div className="row">
      {ArrayGrid} 
    </div>

        <div className="d-flex justify-content-center">
        {MovieNumber > limit ? (<button className="btn btn-c btn-primary" onClick={() => this.onLoadMore()}>Load more</button>) : null}  
        </div>
</section>

     )
     
    }

  }

}

export default MoviesGrid