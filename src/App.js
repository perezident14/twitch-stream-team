import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import api from './api'

import Header from './components/Header'
import Home from './components/Home'
import Live from './components/Live'
import StreamersContainer from './containers/StreamersContainer'
import Contact from './components/Contact'

class App extends Component {
  
  state = {
    displayName: '',
    avi: '',
    established: '',
    creators: [],
    streamers: []
  }

  componentDidMount = async () => {
    await this.fetchData()
    this.state.creators.forEach(creator => {
      this.fetchCreator(creator)
    })
  }

  fetchData = async () => {
    const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
    this.setState({
      displayName: result.data.data[0].team_display_name,
      avi: result.data.data[0].thumbnail_url,
      established: result.data.data[0].created_at,
      creators: result.data.data[0].users
    })
  }

  fetchCreator = async (creator) => {
    if (creator.user_login !== 'astrogaming') {
      const result = await api.get(`https://api.twitch.tv/helix/users?login=${creator.user_login}`)
      this.setState(prevState => ({
        streamers: [...prevState.streamers, result.data.data[0]].sort(this.alphabetize)
      }))
    }
  }

  alphabetize(a, b) {
    if (a.login < b.login) {
      return -1
    }
    if (a.login > b.login) {
      return 1
    }
    return 0
  }

  render() {
    return (
      <Router>
        <Header astro={this.state} />
        <Route exact path='/' component={() => <Home astro={this.state} />} />
        <Route exact path='/live' component={Live} />
        <Route exact path='/streamers' component={() => <StreamersContainer astro={this.state} />} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    )
  }

}

export default App