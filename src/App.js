import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Games from './components/Games'
import Live from './components/Live'
import CreatorsContainer from './containers/CreatorsContainer'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Games} />
      <Route exact path='/live' component={Live} />
      <Route exact path='/creators' component={CreatorsContainer} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  );
}

export default App