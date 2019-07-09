import React, { Component } from 'react'
import './Home.css'
import Header from './Header/Header'
import MoviesGrid from './Movies_Grid/Movies_Grid'
import NoMovieError from './NoMovieError/NoMovieError'
import {connect} from 'react-redux'
import {GetAllMovies} from '../../actions/moviesActions'
import AddMovie from '../Home/AddMovie/AddMovie'
 class Home extends Component {

 componentDidMount(){
    this.props.GetAllMovies();
  }

 render() {
let Dashboard
const {movies}=this.props.movies

    if(Array.isArray(movies)){ 

        if(movies.length === 0) {
        Dashboard = (<div className="container"><NoMovieError/> </div>)
        }

        else{
          Dashboard = (<div> <Header movies={movies}/><MoviesGrid movies={movies} />
                            <AddMovie/> a
                      </div> )
        }
      }
  
    return (<div> {Dashboard}</div>)
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  errors: state.errors
}) 

export default connect(mapStateToProps, {GetAllMovies})(Home)
