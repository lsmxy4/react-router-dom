import React from 'react'

const Header = ({title,leftChild,rightChild}) => {
  return (
    <Header>
        <div className='header_left'>{leftChild}</div>
        <div className='header_center'>{title}</div>
        <div className='header_right'>{rightChild}</div>
    </Header>
  )
}

export default Header