import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Twitch Approach</h1>

      <Link to='/'>Top Games</Link>
      <Link to='/top-streams'>Top Streams</Link>
    </div>
  )
}

export default Header
