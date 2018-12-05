import React from 'react'

import Logo from '../assets/Logo'
import Navigation from './Navigation'
import Search from './Search'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Navigation onCategorySelected={ this.props.onCategorySelected }/>
        <Search onLiveChange={ this.props.onLiveChange } />
      </header>
    )
  }
}

export default Header