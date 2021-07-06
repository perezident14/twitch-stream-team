import React, { Component } from 'react'

import StreamerCard from '../components/StreamerCard'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.astro.displayName}</h1>

        <ul>
          {this.props.astro.streamers.map(streamer => {
            return (
              <StreamerCard streamer={streamer} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CreatorsContainer