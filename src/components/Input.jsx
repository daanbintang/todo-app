import React from 'react'

const Input = (props) => {
  const type = props.type ? props.type : 'text'
  return (
    <input {...props} autoComplete='off' type={type} />
  )
}

export default Input
