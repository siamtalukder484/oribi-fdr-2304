import React from 'react'

const ListItem = ({style, text}) => {
  return (
    <li className={style}>{text}</li>
  )
}

export default ListItem