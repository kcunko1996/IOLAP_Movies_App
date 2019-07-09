import React, { Component } from 'react'
import BackGroundImage from '../BackgroundImage/BackGroundImage'
import Loading from '../../common/Loading'
import CardDescription from '../CardDescription/CardDescription'
import './MoviePage.css'
import {getOneMovie} from '../../../actions/moviesActions'
import {connect} from 'react-redux'
import DeleteModal from '../Delete/DeleteModal'
import Update from '../Update/Update'
import AddMovie from '../../Home/AddMovie/AddMovie'
 class MoviePage extends Component {
 
  
  componentDidMount(){
    this.props.getOneMovie(this.props.match.params.id)
  }
 
  render() {

    const movies = this.props.movies
    let dashboard

    if(Array.isArray(movies)){

      if(movies.length === 1) {
       const {id,name,genre,rating,Year,BackgroundLink,Desc,Language,PictureLink,Time} = movies[0]
      
        dashboard = (<div className="">

                       <BackGroundImage BackgroundLink={BackgroundLink}/>
                       <CardDescription id={id} name={name} genre={genre} rating={rating} Year={Year} Desc={Desc} Language={Language} Time={Time} PictureLink={PictureLink}/>
                       <DeleteModal id={id}/>
                       <Update id={id} name={name} genre={genre} rating={rating} Year={Year} Desc={Desc} Language={Language} PictureLink={PictureLink} BackgroundLink={BackgroundLink}/>
                       <AddMovie/>
                    </div> )
    } else {

            dashboard = (<Loading/>)
            
            } 
   }

    return (
      <div className="Top ">
           {dashboard}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  errors: state.errors
}) 

export default connect(mapStateToProps, {getOneMovie})(MoviePage)
