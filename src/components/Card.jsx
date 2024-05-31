// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className= {`${bg} p-6 rounded-lg shadow-md`}>
    {children}
    </div>
  )
}

export default Card