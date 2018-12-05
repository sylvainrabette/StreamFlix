import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div id="search" className="search">
        <input
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          type="search"
          placeholder="Search for a title..."
          onChange={ e => this.onFilterTextChanged(e) }/>
        </div>
    )
  }
}

export default Search