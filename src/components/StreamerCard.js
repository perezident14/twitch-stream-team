import React from 'react'
import './StreamerCard.css'

function StreamerCard(props) {
  return (
    <div className='streamer-card'>
      <img className='streamer-image' src={props.streamer.profile_image_url} alt={props.streamer.login} />
      <h1 className='streamer-name'>{props.streamer.display_name}</h1>

      <div className='streamer-text'>
        <h3>Bio:</h3>
        <p>{props.streamer.description}</p>
        <a href={`https://twitch.tv/${props.streamer.login}`}>Profile</a>
      </div>
    </div>
  )
}

export default StreamerCard