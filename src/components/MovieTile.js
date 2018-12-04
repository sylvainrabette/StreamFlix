import React from 'react'

class MovieTile extends React.Component {
  render() {
    return (
      <div className="tile">
        <label>{this.props.title}</label>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default MovieTile