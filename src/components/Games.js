import React, { useState, useEffect } from 'react'

function Games(props) {

  return (
    <div>
      <img src={props.astro.avi} alt='astro collective' />
      <br />
      {props.astro.displayName}
      <br />
      {props.astro.established}
      <br />
      {props.astro.creators.map(creator => {
        return (
          <p>{creator.user_login}</p>
        )
      })}
    </div>
  )
}

export default Games

  // useEffect(() => {
    // const fetchData = async () => {
      // const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
      // const result = await api.get('https://api.twitch.tv/helix/users?login=perezident14')
      // const result = await api.get('https://api.twitch.tv/helix/chat/emotes?broadcaster_id=52770049')

      // console.log(result.data)
    // }

    // fetchData()
  // })