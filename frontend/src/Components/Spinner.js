import React, { Component } from 'react'
import loading from "./spinner.gif"
const Spinner=()=> {
  
    return (
      <div className='text-center'><img src={loading} style={{width:"30px"}} alt="Loading" /></div>
    )
  
}

export default Spinner