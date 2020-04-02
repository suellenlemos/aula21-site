import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome } from 'react-icons/fa'

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
    </nav>
  )
}

export default Header