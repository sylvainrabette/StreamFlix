import React from 'react'
import '../styles/NotFound.css'

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found-container">
        <label className="not-found-text">Aucun résultat pour votre recherche</label>
      </div>
    )
  }
}

export default NotFound