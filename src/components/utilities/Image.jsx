import React from 'react'

const Image = ({className,source, alt}) => {
  return (
    <img className={className} src={source} alt={alt}/>
  )
}

export default Image