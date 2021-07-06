import React from 'react'
import './StreamerCard.css'

function StreamerCard(props) {
  return (
    <div className='streamer-card'>
      <img className='streamer-image' src={props.streamer.profile_image_url} alt={props.streamer.login} />
      <h1 className='streamer-name'>{props.streamer.display_name}</h1>
      <p>twitch.tv/{props.streamer.login}</p>
    </div>
  )
}

export default StreamerCard