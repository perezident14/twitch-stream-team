import React, { Component } from 'react'

import Creator from '../components/Creator'

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
              <Creator streamer={streamer} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CreatorsContainer