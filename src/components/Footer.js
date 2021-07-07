import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitch, FaTwitter } from 'react-icons/fa'
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='established'>
          <h4>{props.astro.displayName}</h4>
          <em>est. {props.astro.established}</em>
        </div>

        <div className='social-media'>
          <Link className='social-icon-link' to='/twitch' target='_blank' rel='noopener noreferrer' aria-label='Twitch'>
            <FaTwitch />
          </Link>
          <Link className='social-icon-link' to='/twitter' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer