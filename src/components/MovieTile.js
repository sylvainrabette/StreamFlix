import React from 'react'

class MovieTile extends React.Component {
  render() {
    return (
      <div className="tile">
        <img className="movie-image" src={this.props.image} />
        <label className="movie-title">{this.props.title}</label>
      </div>
      
    )
  }
}

export default MovieTile