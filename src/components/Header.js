import React from 'react'

import Logo from '../assets/Logo'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <div id="search" className="Search">
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