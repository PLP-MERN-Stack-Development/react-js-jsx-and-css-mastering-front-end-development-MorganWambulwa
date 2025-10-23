// src/components/Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 p-4 text-center text-gray-700 dark:text-gray-300 mt-auto">
      &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
    </footer>
  )
}

export default Footer