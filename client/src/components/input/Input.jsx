import React from 'react'
import './Input.scss'

export const Input = ({type,placeholder,name, value, height, onChange}) => {
  return (
    <div className='input-container'>

        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} autoComplete='off' style={{height:`${height}px`}} />

    </div>
  )
}
