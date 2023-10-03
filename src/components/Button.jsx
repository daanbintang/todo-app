import React from 'react'

const Button = (props) => {
  const textcolor = props.textcolor ? props.textcolor : 'bg-blue-700'
  return (
    <button {...props} className={`${textcolor} px-3 py-1 rounded-md text-white`}>{props.children}</button>
  )
}

export default Button
