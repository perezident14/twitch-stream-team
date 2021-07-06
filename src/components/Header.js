import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='team-logo'>Astro Collective</Link>

        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/live' className='nav-link'>Live</Link>
          </li>
          <li className='nav-item'>
            <Link to='/streamers' className='nav-link'>Streamers</Link>
          </li>
          <li className='nav-item'>
            <Link to='/shop' className='nav-link'>Shop</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
