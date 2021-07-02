import React, { useState, useEffect } from 'react'
import api from '../api'

function Games() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
      // const result = await api.get('https://api.twitch.tv/helix/users?login=perezident14')
      const result = await api.get('https://api.twitch.tv/helix/chat/emotes?broadcaster_id=52770049')

      console.log(result.data)
    }

    fetchData()
  })

  return (
    <div>
      <h1>Most Popular Games</h1>
    </div>
  )
}

export default Games
