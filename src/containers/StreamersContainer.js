import React, { Component } from 'react'
import './StreamersContainer.css'

import StreamerCard from '../components/StreamerCard'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='streamers-container'>
        <h1>{this.props.astro.displayName}</h1>

        <div className='streamer-cards'>
          {this.props.astro.streamers.map(streamer => {
            return (
              <StreamerCard streamer={streamer} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default CreatorsContainer