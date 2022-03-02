import React from 'react'

function Alert(props) {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
        //if props.alert is not null then only it will execute
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <h4 className="alert-heading">Well done!</h4> */}
            {/* <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    
  )
}

export default Alert