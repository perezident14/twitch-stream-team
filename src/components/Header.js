import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header(props) {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' >
          <img className='team-logo' src={props.astro.avi} alt='team logo' />
        </Link>

        <ul className='nav-menu'>
          <Link to='/streamers' className='nav-link'>Streamers</Link>
          <a href='https://astrogaming.com' target='_blank' rel='noopener noreferrer' className='nav-link'>Shop</a>
          {/* <Link to='/shop' target='_blank' rel='noopener noreferrer' className='nav-link'>Shop</Link> */}
          <Link to='/contact' className='nav-link'>Contact</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header