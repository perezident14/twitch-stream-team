import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll'
import Creator from '../components/Creator'
import api from '../api'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      creator: '',
      streamers: []
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      this.props.astro.creators.map(creator => {
        const fetchData = async () => {
          const info = await api.get(`https://api.twitch.tv/helix/users?login=${creator.user_login}`)
          this.setState(prevState => ({
            streamers: [...prevState.streamers, info.data.data[0]]
          }))
        }

        fetchData()
      })
    }

    fetchData()
  }

  handleClick = e => {
    console.log(e.currentTarget.value)

    this.setState({
      creator: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.astro.displayName}</h1>

        <ul>
          {this.props.astro.creators.map(creator => {
            return (
              <button onClick={this.handleClick} value={creator.user_login} key={creator.user_id}>
                {creator.user_login}
              </button>
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