import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <ul className="navigation">
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Films</a>
        </li>
        <li>
          <a href="#">Séries</a>
        </li>
        <li>
          <a href="#">Dessins Animés</a>
        </li>
      </ul>
    )
  }
}

export default Navigation