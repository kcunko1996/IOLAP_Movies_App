import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {AddMovieAction} from '../../../actions/moviesActions'
import TextFieldGroup from '../../common/TextFieldGroup'
 class AddMovie extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      genre: '',
      rating: '',
      Year: '',
      Desc: '',
      Language: '',
      PictureLink: '',
      BackgroundLink: '',
      Time: '',
      errors:{}
    }
  }
    onChange = (evt) => {
      this.setState({[evt.target.name]: evt.target.value})
  }
  onSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      name: this.state.name,
      genre: this.state.genre,
      rating: this.state.rating,
      Year: this.state.Year,
      Desc: this.state.Desc,
      Language: this.state.Language,
      PictureLink: this.state.PictureLink,
      BackgroundLink: this.state.BackgroundLink,
      Time: this.state.Time
    }
    this.props.AddMovieAction(data,this.props.history)
    
  }

  componentWillReceiveProps(nextprops) {
   
    if(nextprops.errors){
      this.setState({errors: nextprops.errors })
     
    } 
    
  }

  render() {
    
    const {errors} = this.state
    return (
      <div className="modal fade" id="AddModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add a Movie</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              
            </button>
          </div>
          <div className="modal-body">
          <form onSubmit={(evt)=> this.onSubmit(evt)}>

        <div className="form-row mb-3">

        <TextFieldGroup
        name='name'
        placeholder="Name"
        value= {this.state.name}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.name}
        />

         <TextFieldGroup
        name='genre'
        placeholder="Genre"
        value= {this.state.genre}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.genre}
        />

          </div>

          <div className="form-row mb-3">
            <TextFieldGroup
        name='rating'
        placeholder="Rating"
        value= {this.state.rating}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.rating}
        />

           <TextFieldGroup
        name='Year'
        placeholder="Year"
        value= {this.state.Year}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.Year}
        />
          </div>
          <div className="form-row mb-3">
          <TextFieldGroup
        name='Desc'
        placeholder="Description"
        value= {this.state.Desc}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.Desc}
        />

             <TextFieldGroup
        name='Language'
        placeholder="Language"
        value= {this.state.Language}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.Language}
        />
          </div>
          <div className="form-row mb-3">
          <TextFieldGroup
        name='Time'
        placeholder="Time"
        value= {this.state.Time}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.Time}
        />

            <TextFieldGroup
        name='PictureLink'
        placeholder="PictureLink"
        value= {this.state.PictureLink}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.PictureLink}
        />
          </div>

          <div className="form-row mb-3">

          <TextFieldGroup
        name='BackgroundLink'
        placeholder="BackgroundLink"
        value= {this.state.BackgroundLink}
        type='text'
        onChange={e => this.onChange(e)}
        error={errors.BackgroundLink}
        />
          </div>

          <div className="modal-footer">
          <input type="submit" className="btn btn-info btn-block " />
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
         </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies,
  errors: state.errors
}) 
export default connect(mapStateToProps,{AddMovieAction})(withRouter( AddMovie))