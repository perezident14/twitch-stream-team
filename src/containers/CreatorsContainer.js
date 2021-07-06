import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll'
import Creator from '../components/Creator'

class CreatorsContainer extends Component {
  constructor() {
    super()
    this.state = {
      i: 1
    }
  }

  handleClick = e => {
    // this.setState({
      
    // })
  }

  render() {
    return (
      <div>
        <h1>{this.props.astro.displayName}</h1>

        {this.props.astro.creators.map(creator => {
          return (
            <li>
              {creator.user_login}
            </li>
          )
        })}
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