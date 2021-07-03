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
        {this.props.astro.creators.map(creator => {
          return (
            <Creator name={creator.user_login} />
          )
        })}
      </div>
    )
  }
}

export default CreatorsContainer