// src/components/Card.jsx
import React from 'react'

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 m-2">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  )
}

export default Card