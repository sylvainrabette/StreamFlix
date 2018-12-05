import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div id="search" className="search">
        <input
          type="search"
          placeholder="Search for a title..."
          onChange={ (event) => this.props.onLiveChange(event) }/>
        </div>
    )
  }
}

export default Search