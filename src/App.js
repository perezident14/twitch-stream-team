import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import api from './api'

import Header from './components/Header'
import Games from './components/Games'
import Live from './components/Live'
import CreatorsContainer from './containers/CreatorsContainer'
import Contact from './components/Contact'

class App extends Component {
  constructor() {
    super()
    this.state = {
      astro: {}
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
      this.setState({
        astro: result.data.data[0]
      })
    }
    fetchData()
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={Games} />
        <Route exact path='/live' component={Live} />
        <Route exact path='/creators' component={CreatorsContainer} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    )
  }
}

export default App