import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, browserHistory } from 'react-router-dom'

import MainPage from './MainPage'

class App extends Component {
  constructor () {
    super(...arguments)
  }

  render() {
    return (
      <Router hashType="noslash">
        <Switch>
            <Route path="/" exact={ true } component={MainPage}/>
        </Switch>
      </Router>
    )
  }

}

export default App
