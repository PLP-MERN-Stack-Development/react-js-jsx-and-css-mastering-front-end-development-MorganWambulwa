// src/layout/Layout.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  )
}

export default Layout