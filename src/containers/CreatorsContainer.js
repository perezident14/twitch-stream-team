import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll'
import Creator from '../components/Creator'
import api from '../api'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      streamers: []
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      this.props.astro.creators.map(creator => {
        if (creator.user_login !== 'astrogaming') {
          const fetchCreator = async () => {
            const info = await api.get(`https://api.twitch.tv/helix/users?login=${creator.user_login}`)
            this.setState(prevState => ({
              streamers: [...prevState.streamers, info.data.data[0]]
            }))
          }
          fetchCreator()
        }
      })
    }
    fetchData()
  }

  handleClick = e => {
    console.log(e.currentTarget.value)
  }

  render() {
    return (
      <div>
        <h1>{this.props.astro.displayName}</h1>

        <ul>
          {this.state.streamers.map(streamer => {
            return (
              // <Creator streamer={streamer} />
              <div onClick={this.handleClick} value={streamer.login} key={streamer.id}>
                <h3>{streamer.display_name}</h3>
                <p>{streamer.broadcaster_type}</p>
                <p>{streamer.description}</p>
                <img src={streamer.profile_image_url} alt={streamer.login} />
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CreatorsContainer

// {this.props.astro.creators.map(creator => {
//   return (
//     <Creator name={creator.user_login} />
//   )
// })}