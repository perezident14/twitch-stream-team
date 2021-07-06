import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header(props) {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' >
          <img className='team-logo' src={props.astro.avi} alt='team logo' />
        </Link>

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
