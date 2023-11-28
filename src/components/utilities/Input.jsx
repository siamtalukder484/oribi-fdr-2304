import React from 'react'

const Input = ({type,style,placeholder, value}) => {
  return (
    <input type={type} className={style} placeholder={placeholder} value={value}/>
  )
}

export default Input