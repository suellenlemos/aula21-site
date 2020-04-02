import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome, FaUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <nav>
      <Link to="/">
        <FaHome />
        Home
      </Link>
      <Link to="/contato">
        <FaEnvelope />
        Contato
      </Link>
      <Link to="/portfolio">
        <FaUserCircle />
        Portfolio 
      </Link>
    </nav>
  )
}

export default Header