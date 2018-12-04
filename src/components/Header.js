import React from 'react'

import Logo from '../assets/Logo'
import Navigation from './Navigation'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Navigation />
        <div id="search" className="search">
          <input
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            type="search"
            placeholder="Search for a title..." />
        </div>
      </header>
    )
  }
}

export default Header