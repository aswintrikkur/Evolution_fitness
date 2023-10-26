import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {

    const navigate =useNavigate();


    return (
    <div className='error-container'>

        <h3> Page not found</h3>
        <button onClick={()=>{navigate(-1)}}  > back </button>

    </div>
  )
}
