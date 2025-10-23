// src/components/Button.jsx
import React from 'react'

const Button = ({ children, variant = 'primary', onClick }) => {
  let base = "px-4 py-2 rounded font-semibold transition-colors duration-200"
  let style = ''

  switch (variant) {
    case 'secondary':
      style = "bg-gray-200 text-gray-800 hover:bg-gray-300"
      break
    case 'danger':
      style = "bg-red-500 text-white hover:bg-red-600"
      break
    default:
      style = "bg-blue-600 text-white hover:bg-blue-700"
  }

  return (
    <button className={`${base} ${style}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
