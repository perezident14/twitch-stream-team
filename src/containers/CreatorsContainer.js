import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll'
import Creator from '../components/Creator'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      creator: ''
    }
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
              <div onMouseDown={this.handleClick} value={creator.user_login} key={creator.user_id}>
                {creator.user_login}
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