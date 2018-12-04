import React from 'react'

class MovieTile extends React.Component {
  render() {
    return (
      <div className="tile">
        <img src={this.props.image} />
        <label className="move-title">{this.props.title}</label>
      </div>
    )
  }
}

export default MovieTile