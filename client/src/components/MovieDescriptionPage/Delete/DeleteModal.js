import React from 'react'
import {deleteMovie} from '../../../actions/moviesActions'
import {connect} from 'react-redux'
import './DeleteModal.css'
import {withRouter} from 'react-router-dom'
class DeleteModal extends React.Component {

  onDelete = () =>{
      this.props.deleteMovie(this.props.id, this.props.history)
  }


  render(){
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" >
    
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Deleting Movie</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
           
          </button>
        </div>
        <div className="modal-body">
          Are you sure that you want to delete this movie?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.onDelete()}>Delete</button>
        </div>
      </div>
    </div>
  </div>
  )
  }
}

export default connect(null,{deleteMovie})(withRouter( DeleteModal))