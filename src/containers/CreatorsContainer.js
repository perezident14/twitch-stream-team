import React, { Component } from 'react'
import api from '../api'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      creators: []
    }
  }

  // componentDidMount() {
  //   const fetchData = async () => {
  //     const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
  //     console.log(result.data.data[0])
  //   }
  //   fetchData()
  // }

  render() {
    return (
      <div>
        Creators
      </div>
    )
  }
}

export default CreatorsContainer