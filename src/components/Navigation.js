import React from 'react'
import Constants from '../data/constants'

class Navigation extends React.Component {
  render() {
    return (
      <ul className="navigation">
        <li>
          <a href="#" onClick={ () => this.props.onCategorySelected(Constants.Category.All) }>All</a>
        </li>
        <li>
          <a href="#" onClick={ () => this.props.onCategorySelected(Constants.Category.Film) }>Films</a>
        </li>
        <li>
          <a href="#" onClick={ () => this.props.onCategorySelected(Constants.Category.Serie) }>Séries</a>
        </li>
        {/* <li>
          <a href="#" onClick={ () => this.props.onCategorySelected('anime') }>Dessins Animés</a>
        </li> */}
      </ul>
    )
  }
}

export default Navigation