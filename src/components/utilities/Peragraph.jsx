import React from 'react'

const Peragraph = ({text, style}) => {
  return (
    <p className={style}>
        {text}
    </p>
  )
}

export default Peragraph