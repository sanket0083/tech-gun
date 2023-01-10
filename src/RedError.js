import { ErrorMessage } from 'formik'
import React from 'react'

function RedError({name}) {
  return ( 
    <div style={{color : 'red'}}>
      <ErrorMessage  name={name}/>
    </div>
  )
}

export default RedError
