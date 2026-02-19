import React from 'react'

const Button = ({text,type,onClick}) => {
  return (
    <button onClick={onClick} className={`Button ${type}`}>{text}</button>
  )
}

export default Button