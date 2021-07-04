import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll'
import Creator from '../components/Creator'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.astro.displayName}</h1>

        {/* <InfiniteScroll> */}
          {this.props.astro.creators.map(creator => {
            return (
              <Creator name={creator.user_login} />
            )
          })}
        {/* </InfiniteScroll> */}
      </div>
    )
  }
}

export default CreatorsContainer