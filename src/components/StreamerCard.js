import React from 'react'
import './StreamerCard.css'

function StreamerCard(props) {
  return (
    <a className='streamer-card' href={`https://twitch.tv/${props.streamer.login}`} target='_blank' rel='noreferrer'>
    {/* <div className='streamer-card'> */}
      <img className='streamer-image' src={props.streamer.profile_image_url} alt={props.streamer.login} />
      <h1 className='streamer-name'>{props.streamer.display_name}</h1>
    {/* </div> */}
    </a>
  )
}

export default StreamerCard