import React from 'react'

const List = ({style, children}) => {
  return (
    <ul className={style}>
        {children}
    </ul>
  )
}

export default List