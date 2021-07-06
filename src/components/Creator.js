import React from 'react'

function Creator(props) {
  return (
    <div>
      <img src={props.streamer.profile_image_url} />

      <h1>{props.streamer.display_name}</h1>

      <h3>Bio:</h3>
      <p>{props.streamer.description}</p>

      <a href={`https://twitch.tv/${props.streamer.login}`}>Profile</a>
    </div>
  )
}

export default Creator