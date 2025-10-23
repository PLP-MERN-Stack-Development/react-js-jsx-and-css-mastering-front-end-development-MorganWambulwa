import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow">
      {/* Logo / Brand */}
      <div className="font-bold text-lg">Task Manager</div>

      {/* Navigation Links and Theme Toggle */}
      <div className="space-x-4 flex items-center">
        <Link 
          to="/" 
          className="hover:underline"
        >
          Home
        </Link>
        <Link 
          to="/tasks" 
          className="hover:underline"
        >
          Tasks
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white hover:brightness-90 transition"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar