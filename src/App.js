import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Games from './components/Games'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Games} />
    </Router>
  );
}

export default App