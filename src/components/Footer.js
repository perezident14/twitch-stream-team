import React from 'react'
// import { Link } from 'react-router-dom'
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
          {/* <Link className='social-icon-link' to='/twitch' target='_blank' rel='noopener noreferrer' aria-label='Twitch'> */}
          <a className='social-icon-link' href='https://twitch.tv/team/astro' target='_blank' rel='noopener noreferrer' aria-label='Twitch'>
            <FaTwitch />
          </a>
          {/* </Link> */}

          {/* <Link className='social-icon-link' to='/twitter' target='_blank' rel='noopener noreferrer' aria-label='Twitter'> */}
          <a className='social-icon-link' href='https://twitter.com/thecollective' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
            <FaTwitter />
          </a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Footer