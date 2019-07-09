import React from 'react'

export default function Button() {
  return (
    <div className="row">

    <div className="col-sm text-left">
      <button type="button" className="btn btn-outline-danger mr-3" data-toggle="modal" data-target="#exampleModal">Delete</button>
    </div>

    <div className="col-sm  text-left">
      <button type="button" className="btn btn-outline-warning"  data-toggle="modal" data-target="#UpdateModal">Update</button>
      
    </div>
    
</div>
  )
}
