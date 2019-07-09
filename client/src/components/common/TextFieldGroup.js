import React from 'react'
import classnames from 'classnames'
const TextFieldGroup = ({name, placeholder, value, error, info, type, onChange, disabled}) => {
  
  return (
    <div className="col">
        <input type={type} placeholder={placeholder} name={name}  className={classnames('form-control form-control-lg' , {'is-invalid': error})} value={value} onChange = {onChange} disabled={disabled}/>
        {info && <small className='form-text text-muted'>{info}</small>}
        {error && (<div className="invalid-feedback">{error}</div>) }

        </div>
  )
}

export default TextFieldGroup