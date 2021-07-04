import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import api from './api'

import Header from './components/Header'
import Games from './components/Games'
import Live from './components/Live'
import CreatorsContainer from './containers/CreatorsContainer'
import Contact from './components/Contact'

class App extends Component {
  
  state = {
    displayName: '',
    avi: '',
    established: '',
    creators: [],
  }

  componentDidMount() {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/teams?name=astro')
      console.log(result.data.data[0])
      this.setState({
        displayName: result.data.data[0].team_display_name,
        avi: result.data.data[0].thumbnail_url,
        established: result.data.data[0].created_at,
        creators: result.data.data[0].users
      })
    }
    fetchData()
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={() => <Games astro={this.state} />} />
        <Route exact path='/live' component={Live} />
        <Route exact path='/creators' component={() => <CreatorsContainer astro={this.state} />} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    )
  }

}

export default App