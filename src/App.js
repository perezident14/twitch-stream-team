import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Games from './components/Games'
import Streams from './components/Streams'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Games} />
      <Route exact path='/top-streams' component={Streams} />
    </Router>
  );
}

export default App