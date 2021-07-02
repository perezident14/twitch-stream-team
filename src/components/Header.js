import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

function Header() {
  return (
    <div>
      <h1><Link to='/'>Astro Collective</Link></h1>

      <Link to='/live'>Live</Link>
      <Link to='/creators'>Creators</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header
