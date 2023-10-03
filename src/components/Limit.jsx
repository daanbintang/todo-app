import React from 'react'

const Limit = ({limit, titleLength}) => {
  return (
    <p className="text-white font-bold text-center">Sisa Karakter : {limit - titleLength}</p>
  )
}

export default Limit
