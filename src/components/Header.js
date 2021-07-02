import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Astro Collective</h1>

      <Link to='/live'>Live</Link>
      <Link to='/creators'>Creators</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header
