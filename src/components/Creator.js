import React, { useState, useEffect } from 'react'
import api from '../api'

function Creator(props) {

  const [creator, setCreator] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const info = await api.get(`https://api.twitch.tv/helix/users?login=${props.name}`)
      // console.log(info.data.data[0])
      setCreator(info.data.data[0])
    }
    fetchData()
  })

  return (
    <div>
      {creator.login}
    </div>
  )
}

export default Creator